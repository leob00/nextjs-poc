import { Box, Button, Stack, Typography } from '@mui/material'

const Band = () => {
  return (
    <Box sx={{ px: 8, pt: 0, pb: 8 }}>
      <Stack alignItems={'center'} spacing={4}>
        <Typography variant='h3' fontWeight={'bold'} textAlign='center'>
          Sign In to EMMA Now to
          <br />
          Set Up Security Alerts
        </Typography>
        <Stack direction={'row'} spacing={4}>
          <Button variant='outlined'>Sign Up</Button>
          <Button variant='contained'>Sign In</Button>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Band
