import React from 'react'
import type { NextPage } from 'next'
import { GetStaticPaths, GetStaticProps } from 'next'
import { strapiClient, gql } from 'lib/strapiGraphQL'
import { Box, Typography } from '@mui/material'
import { convertMarkDown } from 'lib/convertMarkDown'

export const getStaticPaths: GetStaticPaths = async () => {
  const client = strapiClient()
  const { data } = await client.query({
    query: gql`
      query getMsrbRulesToGenerate {
        msrbRules(sort: "order") {
          data {
            attributes {
              name
            }
          }
        }
      }
    `,
  })
  const rdata = (data.msrbRules.data as { attributes: { name: string } }[]).map((i) => `/rules/${i.attributes.name}`)
  return {
    paths: rdata,
    fallback: false,
  }
}

interface MsrbRule {
  attributes: {
    name: string
    description: string
    summary: string
    text: string
    lastUpdated: string
    number: string
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const client = strapiClient()
  const { data } = await client.query({
    query: gql`
      query getMsrbRule($name: String!) {
        msrbRules(filters: { name: { eq: $name } }) {
          data {
            attributes {
              name
              description
              summary
              text
              lastUpdated
              number
            }
          }
        }
      }
    `,
    variables: { name: context?.params?.id },
  })
  return {
    props: {
      data: data.msrbRules.data[0],
    },
  }
}

const Rule: NextPage<{ data: MsrbRule }> = ({ data }) => {
  return (
    <>
      <Box sx={{ borderTop: '2px solid lightgray', minHeight: 500, paddingTop: 4 }} pt={4}>
        <Box sx={{ width: '80%', margin: 'auto' }}>
          <Typography variant='h5'>{data.attributes['number']}</Typography>
          <Typography variant='h6'>{data.attributes.description}</Typography>
          <Typography variant='body1' gutterBottom><b>Summary:</b> {data.attributes.summary}</Typography>
          {/* <Typography variant='body2' dangerouslySetInnerHTML={{__html: convertMarkDown(data.attributes.text)}} /> */}
          <div dangerouslySetInnerHTML={{__html: convertMarkDown(data.attributes.text)}} />
          {data.attributes.lastUpdated && 
          <Typography variant='body2'>Last Updated Date: {data.attributes.lastUpdated}</Typography>
          }
        </Box>
      </Box>
    </>
  )
}

export default Rule
