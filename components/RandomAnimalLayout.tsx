import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material'
import { BasicArticle } from 'lib/randomRepo'
import React from 'react'

const RandomAnimalLayout = ({ data, onRefresh }: { data: BasicArticle; onRefresh?: () => void }) => {
  const handleNextClick = () => {
    if (onRefresh) {
      onRefresh()
    }
  }
  return (
    <>
      <Box>
        <Typography variant='h5'>{data.title}</Typography>
        <Divider />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Grid item></Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid item>
            <Box>
              <Stack direction='row' justifyContent='center' my={3}>
                <img src={data.imagePath} alt='random dog' height={320} style={{ borderRadius: '.8rem' }} />
              </Stack>
              <Box sx={{ textAlign: 'center' }}>
                <Button variant='outlined' onClick={handleNextClick}>
                  Next
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default RandomAnimalLayout
