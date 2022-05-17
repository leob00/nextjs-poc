import { Box, Button, Container, Typography } from '@mui/material'
import { DrupalNode } from 'next-drupal'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getArticle, getRules } from 'lib/drupalApi'
import useSWR, { SWRConfig, unstable_serialize } from 'swr'
import ArticleLayout from 'components/ArticleLayout'

const cmsRefreshInterval = 20000

export const getStaticPaths: GetStaticPaths = async () => {
  let allArticles = await getRules()
  let paths = allArticles.map((article) => `/ssg/rules/${article.id}`)

  return {
    paths: paths,
    fallback: 'blocking',
  }
}
const fetcher = async (url: string, id: string) => {
  let resp = await fetch(`${url}?id=${id}`)
  return resp.json()
}

export const getStaticProps: GetStaticProps = async (context) => {
  let id = context.params?.id as string
  let article = await getArticle(id)

  return {
    props: {
      fallback: {
        [unstable_serialize(['api', 'article', id])]: article,
      },
      article,
    },
    revalidate: 20
  }
}

const Article = ({ fallbackData }: { fallbackData: DrupalNode }) => {
  const { data, error } = useSWR(['/api/article', fallbackData.id], (url: string, id: string) => fetcher(url, id), {
    fallbackData: fallbackData,
    refreshInterval: cmsRefreshInterval,
  })
  if (error) {
    return <ArticleLayout article={fallbackData} />
  }

  let article = data as DrupalNode
  if (!article) {
    return <Container>loading content...</Container>
  }
  return <ArticleLayout article={article} />
}

const MsrbRule: NextPage<{ fallback: any; article: DrupalNode }> = ({ fallback, article }) => {
  return (
    <Container>
      <SWRConfig value={{ fallback }}>
        <Article fallbackData={article} />
      </SWRConfig>
    </Container>
  )
}

export default MsrbRule
