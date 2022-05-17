import React from 'react'
import Image from 'next/image'
import type { YieldCurveData } from 'lib/model'
import { Box, Button, Card, Link, Paper, Tab, Tabs, Typography } from '@mui/material'
import SimpleTable from './SimpleTable'
import YieldCurveChart from './Organisms/Charts/YieldCurveChart'

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

const YieldCurveLayout = ({ data }: { data: YieldCurveData }) => {
  const [tabIndex, setTabIndex] = React.useState(0)
  const [showChart, setShowChart] = React.useState(true)

  const handleTabIndexChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue)
  }

  const handleChartToggle = () => {
    let show = !showChart
    setShowChart(show)
  }

  return (
    <>
      <Box sx={{ minHeight: 500, mb: 3, mt: 1 }}>
        <Card sx={{ mx: 4, p: 2 }} elevation={2}>
          <Typography variant='subtitle1'>Yield Curves and Indices</Typography>
          <Typography variant='h5'>BondWave AA QCurve</Typography>
          <Typography variant='subtitle2' gutterBottom>
            The BondWave AA QCurve is a quantitatively derived yield curve built from executed trades offering full data transparency. Data are available for 03/01/2017 through 04/14/2022.
          </Typography>
          <Typography variant='body2'>
            <Link href='https://www.msrb.org/~/media/Files/EMMA/BondWave-Methodology.ashx' target='_blank' rel='noreferrer'>
              Access additional information about this provider and its methodology here.
            </Link>
          </Typography>
          <Typography variant='body2' gutterBottom>
            <Link href='https://emma.msrb.org/EmmaHelp/UnderstandingYieldCurvesandIndices' target='_blank' rel='noreferrer'>
              For more information on understanding yield curves and indices, visit EMMA Help.
            </Link>
          </Typography>
          <Tabs value={tabIndex} onChange={handleTabIndexChange}>
            <Tab label='Daily Yield Curve' />
            <Tab label='Historical Yield Data' />
          </Tabs>
          <Box sx={{ borderTop: '1px solid lightgray', marginTop: 0.5 }}>
            <TabPanel value={tabIndex} index={0}>
              <Box sx={{ textAlign: 'center' }}>
                <Button variant='contained' color='primary' onClick={handleChartToggle}>
                  {showChart ? 'show data' : 'show chart'}
                </Button>
              </Box>
              {showChart ? (
                <YieldCurveChart data={data} />
              ) : (
                <Box>
                  <SimpleTable rows={data.rows.map((i) => [i.yearsToMaturity.toString(), `${i.yield}%`])} headers={['Years to Maturity', 'Yield']} width={250} />
                </Box>
              )}
            </TabPanel>
            <TabPanel value={tabIndex} index={1}>
              Coming soon ...
            </TabPanel>
          </Box>
          <Box sx={{ borderTop: '1px solid lightgray', marginTop: 0.5 }}>
            <Box sx={{ mt: 1 }}>
              <Image src='/images/bondwave-logo.png' width={121} height={30} alt='Bondwave Logo' />
            </Box>
            <Typography variant='body2' gutterBottom>
              QCurves™ © BondWave LLC 2018-2022. All rights reserved. QCurves™ powered by Effi™. All rights reserved.
            </Typography>
            <Typography variant='body2' gutterBottom>
              The MSRB does not review or independently verify the accuracy, completeness, timeliness, methodology used in or other aspects of the index values, indices or other data or information provided by third-party providers. The products or
              services displayed on EMMA are among those available in the marketplace. The display of any particular third-party product or service on the EMMA website by trade name, trademark, manufacturer, or otherwise does not constitute or imply
              the MSRB’s sponsorship, approval, affiliation, endorsement, recommendation, or favoring of such product or service.
            </Typography>
          </Box>
        </Card>
      </Box>
    </>
  )
}

export default YieldCurveLayout
