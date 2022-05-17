import React from 'react'
import { TxData } from 'lib/getTxs'
import Tx from './Tx'

const TxList = ({ txs }: { txs: TxData[] }) => {
  if (!txs || txs.length === 0) {
    return <Tx tx={{ attributes: { variant: 'h6', text: 'Oops, data is missing!' } }} />
  }
  return (
    <>
      {txs.map((tx, ix) => (
        <Tx tx={tx} key={ix} />
      ))}
    </>
  )
}

export default TxList
