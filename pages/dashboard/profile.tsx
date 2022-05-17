import React from 'react'
import { Box, IconButton, Paper, Stack, Typography } from '@mui/material'
import DashboardNav from 'components/DashboardNav'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'

const Profile = () => (
  <>
    <>
      <Paper elevation={2} sx={{ mb: 2 }}>
        <Stack direction='row' sx={{ minHeight: '80vh' }}>
          <DashboardNav />
          <Box sx={{ pt: 3, pl: 2, width: '100%' }}>
            <Stack direction='row' width={'100%'}>
              <Typography variant='h3' flexGrow={1}>
                Dashboard
              </Typography>
              <Box mt={-2.5}>
                <IconButton>
                  <SettingsOutlinedIcon />
                </IconButton>
              </Box>
            </Stack>
            <Typography variant='body1'>A place available only to signed in users.</Typography>
          </Box>
        </Stack>
      </Paper>
    </>
  </>
)

export default Profile
