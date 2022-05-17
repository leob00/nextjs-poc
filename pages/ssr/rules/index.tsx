import React from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import { getRules } from 'lib/drupalApi'
import { DrupalNode } from 'next-drupal'
import RulesTableLayout from 'components/RulesTableLayout'

export const getServerSideProps: GetServerSideProps = async (context) => {
  let ruleArticles = await getRules()
  return {
    props: {
      articles: ruleArticles,
    },
  }
}

const MSRBRules: NextPage<{ articles: DrupalNode[] }> = ({ articles }) => {
  return <RulesTableLayout articles={articles} renderType='ssr' />
}

export default MSRBRules

