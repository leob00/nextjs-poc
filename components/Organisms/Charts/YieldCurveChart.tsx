import { Container, styled, Typography } from '@mui/material'
import { Chart as ChartJS } from 'chart.js'

import { ChartData, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, CoreChartOptions, DatasetChartOptions, ElementChartOptions, PluginChartOptions, ScatterDataPoint } from 'chart.js'
import { _DeepPartialObject } from 'chart.js/types/utils'
import { YieldCurveData } from 'lib/model'
import React from 'react'
import { Line } from 'react-chartjs-2'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
const YieldCurveChart: React.FunctionComponent<{ data: YieldCurveData }> = ({ data }) => {
  const lineChartOptions: _DeepPartialObject<CoreChartOptions<'line'> & ElementChartOptions<'line'> & PluginChartOptions<'line'> & DatasetChartOptions<'line'>> = {
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  let chartCfg: ChartData<'line', (number | ScatterDataPoint)[], unknown> = {
    labels: data.rows.map((p) => p.yearsToMaturity),
    datasets: [
      {
        label: 'Yield Curve',
        data: data.rows.map((p) => p.yield),
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  }

  const ChartWrapper = styled(Container)`
    width: 90%;
  `
  return (
    <ChartWrapper>
      <Line data={chartCfg} options={lineChartOptions} />
      <Typography color='gray' sx={{ textAlign: 'center' }}>
        years to maturity
      </Typography>
    </ChartWrapper>
  )
}

export default YieldCurveChart
