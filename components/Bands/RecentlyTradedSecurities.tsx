import Image from 'next/image'
import { Box, Button, Stack, Typography } from '@mui/material'

const Band = () => {
  return (
    <Box sx={{ p: 8 }}>
      <Stack alignItems={'center'} spacing={4}>
        <Box>
          <Typography variant='h3' fontWeight={'bold'}>
            Recently Traded Securities
          </Typography>
        </Box>
        <Box>
          <Image src='/images/fake-trades.png' height={485} width={872} />
        </Box>
      </Stack>
    </Box>
  )
}

export default Band
