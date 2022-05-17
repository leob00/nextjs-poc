import { Box, Button, Stack, Typography } from '@mui/material'

const Band = () => {
  return (
    <Box sx={{ p: 8, backgroundColor: '#ccecfc' }} pt={4}>
      <Stack direction={'row'} spacing={8} alignItems='center'>
        <Box>
          <Typography variant='h3' fontWeight={'bold'}>
            Compare Municipal Bonds
          </Typography>
          <Typography variant='h6'>Use the Price Discovery Tool to find and compare trade prices and yields for municipal bonds with similar characteristics.</Typography>
        </Box>
        <Box sx={{ width: 400 }}>
          <Button variant='contained'>Compare Municipal Bonds</Button>
        </Box>
      </Stack>
    </Box>
  )
}

export default Band
