import React from 'react'
import type { NextPage } from 'next'
import { Stack } from '@mui/material'
import BrowseSecuritiesBand from 'components/Bands/BrowseSecurities'
import CompareMunicipalBonds from 'components/Bands/CompareMunicipalBonds'
import RecentlyTradedSecurities from 'components/Bands/RecentlyTradedSecurities'
import SetUpSecurityAlerts from 'components/Bands/SetUpSecurityAlerts'

const BrowseSecurities: NextPage = () => {
  return (
    <Stack>
      <BrowseSecuritiesBand />
      <CompareMunicipalBonds />
      <RecentlyTradedSecurities />
      <SetUpSecurityAlerts />
    </Stack>
  )
}

export default BrowseSecurities
