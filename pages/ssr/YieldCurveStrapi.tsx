import React from 'react'
import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import type { YieldCurveData } from 'lib/model'
import { getYieldCurveData } from 'lib/yieldCurveRepo'
import YieldCurveLayout from 'components/YieldCurveLayout2'
import { getTxs, TxData } from 'lib/getTxs'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await getYieldCurveData()
  const list1 = await getTxs('pg-yc-bw:')
  const list2 = await getTxs('pg-yc-bw-2:')
  return {
    props: {
      data,
      list1,
      list2
    },
  }
}

const YieldCurve: NextPage<{ data: YieldCurveData, list1: TxData[], list2: TxData[] }> = ({ data, list1, list2 }) => {
  return <YieldCurveLayout data={data} list1={list1} list2={list2} />
}

export default YieldCurve
