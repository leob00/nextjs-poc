import React from 'react'
import Image from 'next/image'
import type { YieldCurveData } from 'lib/model'
import { Box, Card, Link, Tab, Tabs, Typography } from '@mui/material'
import SimpleTable from './SimpleTable'
import { TxData } from 'lib/getTxs'
import { TxList } from 'components/Tx'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

const YieldCurveLayout = ({ data, list1, list2 }: { data: YieldCurveData; list1: TxData[]; list2: TxData[] }) => {
  const [tabIndex, setTabIndex] = React.useState(0)

  const handleTabIndexChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue)
  }
  return (
    <>
      <Box sx={{ minHeight: 500, mb: 3, mt: 1 }}>
        <Card sx={{ mx: 4, p: 2 }} elevation={2}>
          <TxList txs={list1} />
          <Tabs value={tabIndex} onChange={handleTabIndexChange}>
            <Tab label='Daily Yield Curve' />
            <Tab label='Historical Yield Data' />
          </Tabs>
          <Box sx={{ borderTop: '1px solid lightgray', marginTop: 0.5 }}>
            <TabPanel value={tabIndex} index={0}>
              <SimpleTable rows={data.rows.map((i) => [i.yearsToMaturity.toString(), `${i.yield}%`])} headers={['Years to Maturity', 'Yield']} width={250} />
            </TabPanel>
            <TabPanel value={tabIndex} index={1}>
              Coming soon ...
            </TabPanel>
          </Box>
          <Box sx={{ borderTop: '1px solid lightgray', marginTop: 0.5 }}>
            <Box sx={{ mt: 1 }}>
              <Image src='/images/bondwave-logo.png' width={121} height={30} alt='Bondwave Logo' />
            </Box>
            <TxList txs={list2} />
          </Box>
        </Card>
      </Box>
    </>
  )
}

export default YieldCurveLayout
