import { Box, Button, Grid, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import { DarkMode } from 'components/darkMode'

const Band = () => {
  return (
    <DarkMode>
      <Stack direction={'row'} spacing={8} p={8} sx={{ backgroundColor: '#00263a' }}>
        <Box sx={{ width: '30%', minWidth: 200 }}>
          <Typography variant='h3' fontWeight={'bold'} color='primary'>
            <b>Browse Securities</b>
          </Typography>
          <Typography variant='h6' color='primary'>
            Search municipal securities to the right via keyword or filter.
          </Typography>
        </Box>
        <Box sx={{ width: '70%', minWidth: 240 }}>
          <Grid container spacing={2} xs={12} align-items='center'>
            <Grid item xs={12}>
              <TextField
                size='small'
                label='Search for security by CUSIP, description, state, etc.'
                sx={{ width: '100%' }}
                InputProps={
                  {
                    //   startAdornment: (<InputAdornment position='start'>
                    //   <IconButton>
                    //     <SearchIcon />
                    //   </IconButton>
                    // </InputAdornment>)
                  }
                }
              ></TextField>
            </Grid>
            <Grid item xs={12} textAlign='center'>
              <Typography component={'div'} color='primary' sx={{margin: 'auto'}}>
                <b>--- OR ---</b>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <TextField size='small' color='primary' select label='Search by Sector' sx={{ width: 200 }}>
                <MenuItem key={'key1'} value={'val1'}>
                  {'Option 1'}
                </MenuItem>
                <MenuItem key={'key2'} value={'val2'}>
                  {'Option 2'}
                </MenuItem>
                <MenuItem key={'key3'} value={'val3'}>
                  {'Option 3'}
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={4}>
              <TextField size='small' color='primary' select label='Search by Source of Repayment' sx={{ width: 200, '& input': { backgroundColor: 'white' } }}>
                <MenuItem key={'key1'} value={'val1'}>
                  {'Option 1'}
                </MenuItem>
                <MenuItem key={'key2'} value={'val2'}>
                  {'Option 2'}
                </MenuItem>
                <MenuItem key={'key3'} value={'val3'}>
                  {'Option 3'}
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={4}>
              <TextField size='small' color='primary' select label='Search by Tax Status' sx={{ width: 200, '& input': { backgroundColor: 'white' } }}>
                <MenuItem key={'key1'} value={'val1'}>
                  {'Option 1'}
                </MenuItem>
                <MenuItem key={'key2'} value={'val2'}>
                  {'Option 2'}
                </MenuItem>
                <MenuItem key={'key3'} value={'val3'}>
                  {'Option 3'}
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={4}>
            </Grid>
            <Grid item xs={4}>
              <Button variant='contained' color='primary' sx={{width: 200}}>
                Search
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </DarkMode>
  )
}

export default Band
