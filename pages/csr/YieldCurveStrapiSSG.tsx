import React from 'react'
import type { NextPage } from 'next'
import { GetStaticPaths, GetStaticProps } from 'next'
import type { YieldCurveData } from 'lib/model'
import { getYieldCurveData } from 'lib/yieldCurveRepo'
import YieldCurveLayout from 'components/YieldCurveLayout2'
import { getTxs, TxData } from 'lib/getTxs'

export const getStaticProps: GetStaticProps = async (context) => {
  //const data = await getYieldCurveData()
  const list1 = await getTxs('pg-yc-bw:')
  const list2 = await getTxs('pg-yc-bw-2:')
  return {
    props: {
      data: {rows: []},
      list1,
      list2
    },
  }
}

const YieldCurve: NextPage<{ data: YieldCurveData, list1: TxData[], list2: TxData[] }> = ({ data: dataIn, list1, list2 }) => {

  const [data, setData] = React.useState<YieldCurveData>(dataIn)

  React.useEffect(() => {
    const fn = async () => {
      const result = await fetch('/api/yieldCurve', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      setData(await result.json())
    }
    fn()
  }, [])

  return <YieldCurveLayout data={data} list1={list1} list2={list2} />
}

export default YieldCurve
