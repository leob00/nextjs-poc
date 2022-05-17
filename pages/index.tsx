import type { NextPage } from 'next'
import { Stack } from '@mui/material'
import { TopBand, DevFeatures } from 'components/Home'

const Home: NextPage = () => {
  return (
    <>
      <Stack spacing={3}>
        <TopBand />
        <DevFeatures />
      </Stack>
    </>
  )
}

export default Home
