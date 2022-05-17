import React from 'react'
import { TxData } from 'lib/getTxs'
import { Link, Typography } from '@mui/material'
import { convertMarkDown } from 'lib/convertMarkDown'

const Tx = ({ tx }: { tx: TxData }) => {
  if (!tx.attributes.href) {
    return (
      <Typography variant={tx.attributes.variant} gutterBottom={tx.attributes.gutterBottom}>
        {tx.attributes.text}
      </Typography>
    )
  }
  return (
    <Typography variant={tx.attributes.variant} gutterBottom={tx.attributes.gutterBottom}>
      <Link href={tx.attributes.href} target='_blank'  rel='noreferrer'>
        {tx.attributes.text}
      </Link>
    </Typography>
  )
}

export default Tx
