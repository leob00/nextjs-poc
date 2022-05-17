import * as React from 'react'
import router from 'next/router'
import { logout } from 'lib/auth'
import { Box, IconButton, Stack, Typography } from '@mui/material'

// icons
import HomeIcon from '@mui/icons-material/Home'
import ArticleIcon from '@mui/icons-material/Article'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import EqualizerIcon from '@mui/icons-material/Equalizer'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import PaidIcon from '@mui/icons-material/Paid'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'

const handleLogout = () => {
  logout()
  router.push('/')
}

const DashboardNav = () => {
  return (
    <Box width={75} sx={{ bgcolor: '#003668', }} pt={2} >
      <Stack spacing={3}>
        <Stack spacing={0}>
          <IconButton>
            <HomeIcon style={{ color: 'white' }} />
          </IconButton>
          <Typography style={{ color: 'white' }} fontSize={10} align='center'>
            Dashboard
          </Typography>
        </Stack>
        <Stack spacing={0}>
          <IconButton style={{ color: 'white' }}>
            <ArticleIcon />
          </IconButton>
          <Typography style={{ color: 'white' }} fontSize={10} align='center'>
            Disclosure <br /> Portal
          </Typography>
        </Stack>
        <Stack spacing={0}>
          <IconButton style={{ color: 'white' }}>
            <BookmarkIcon />
          </IconButton>
          <Typography style={{ color: 'white' }} fontSize={10} align='center'>
            Saved<br />Issuers
          </Typography>
        </Stack>
        <Stack spacing={0}>
          <IconButton style={{ color: 'white' }}>
            <EqualizerIcon />
          </IconButton>
          <Typography style={{ color: 'white' }} fontSize={10} align='center'>
            Saved<br />Securities
          </Typography>
        </Stack>
        <Stack spacing={0}>
          <IconButton style={{ color: 'white' }}>
            <NotificationsActiveIcon />
          </IconButton>
          <Typography style={{ color: 'white' }} fontSize={10} align='center'>
            Alerts
          </Typography>
        </Stack>
        <Stack spacing={0}>
          <IconButton style={{ color: 'white' }}>
            <PaidIcon />
          </IconButton>
          <Typography style={{ color: 'white' }} fontSize={10} align='center'>
            Trade Portal
          </Typography>
        </Stack>
        <Stack spacing={0}>
          <IconButton style={{ color: 'white' }}>
            <AccountCircleIcon />
          </IconButton>
          <Typography style={{ color: 'white' }} fontSize={10} align='center'>
            My Profile
          </Typography>
        </Stack>
        <Stack spacing={0}>
          <IconButton style={{ color: 'white' }} onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
          <Typography style={{ color: 'white' }} fontSize={10} align='center'>
            Sign Out
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default DashboardNav
