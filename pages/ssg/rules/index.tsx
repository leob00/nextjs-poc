import React from 'react'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { getRules } from 'lib/drupalApi'
import { DrupalNode } from 'next-drupal'
import RulesTableLayout from 'components/RulesTableLayout'
import useSWR, { SWRConfig } from 'swr'

const cmsRefreshInterval = 20000

const fetcher = async (url: string) => {
  let resp = await fetch(url)
  return resp.json()
}
export const getStaticProps: GetStaticProps = async (context) => {
  let ruleArticles = await getRules()
  console.log(`regenerating rules`)
  return {
    props: {
      articles: ruleArticles,
      fallback: {
        '/api/MSRBRules': ruleArticles,
      },
    },
    revalidate: 20
  }
}
const Articles = ({ fallbackData }: { fallbackData: DrupalNode[] }) => {
  const { data, error } = useSWR(['/api/MSRBRules'], (url: string) => fetcher(url), {
    fallbackData: fallbackData,
    refreshInterval: cmsRefreshInterval,
  })

  if (error) {
    return <RulesTableLayout articles={fallbackData} renderType='ssg' />
  }
  let articles = data as DrupalNode[]
  return <RulesTableLayout articles={articles} renderType='ssg' />
}

const MSRBRules: NextPage<{ articles: DrupalNode[]; fallback: any }> = ({ articles, fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Articles fallbackData={articles} />
    </SWRConfig>
  )
}

export default MSRBRules

