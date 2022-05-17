import React from 'react'
import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import { getTxs, TxData } from 'lib/getTxs'
import { TxList } from 'components/Tx'

export const getServerSideProps: GetServerSideProps = async (context) => {
    const list1 = await getTxs('samp:')
    return {
      props: {
        list1,
      },
    }
  }

const Samp: NextPage<{ list1: TxData[] }> = ({ list1 }) => {

    return <div><TxList txs={list1} /></div>
}

export default Samp