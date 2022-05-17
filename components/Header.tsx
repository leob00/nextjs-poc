import React, { useState, useEffect } from 'react'
import { AppBar, Box, Button, Container, Grid, IconButton, InputAdornment, Menu, MenuItem, TextField, Toolbar, useScrollTrigger, Link, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import MenuIcon from '@mui/icons-material/Menu'
import { isLoggedIn } from 'lib/auth'
import useRouter from 'next/router'
import Image from 'next/image'
import NLink from 'next/link'
import Head from 'next/head'
import ToolsAndResourcesMenu from './Atoms/ToolsAndResourcesMenu'

// This is used to make the header stick to the top
function ElevationScroll({ children, setElevationEffect }: { children: React.ReactElement<any>, setElevationEffect: (val: boolean) => void }) {
  // const trigger = useScrollTrigger({
  //   disableHysteresis: true,
  //   threshold: 0,
  // })
  // setElevationEffect(trigger)
  // return React.cloneElement(children, {
  //   //elevation: trigger ? 8 : 4,
  // })
  return children
}

const EmmaHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState<(EventTarget & HTMLButtonElement) | null>(null)
  const [isSignedIn, setIsSignedIn] = useState<boolean | null>(null)
  const [elevationEffect, setElevationEffect] = useState(false)
  const router = useRouter
  const open = Boolean(anchorEl)

  const bodyScrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  useEffect(() => {
    setElevationEffect(bodyScrolled)
  }, [bodyScrolled])

  const loggedIn = isLoggedIn()
  useEffect(() => {
    setIsSignedIn(loggedIn)
  }, [loggedIn])

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  /**
   * TODO: When the below is uncommented, it enters an infinite loop
   * @param {} location
   */
  const handleMenuClick = (location: string) => {
    setAnchorEl(null)
    router.push(location)
  }

  return (
    <>
      <Head>
        <title>Municipal Securities Rulemaking Board::EMMA</title>
      </Head>
      <>
          <AppBar sx={{ backgroundColor: 'white' }} position='sticky' elevation={elevationEffect ? 4 : 0}>
            <Toolbar
              sx={{
                width: '100%',
               // maxWidth: 1200,
                mx: 'auto',
                py: 1,
              }}
            >
              <>
                <Grid container columns={{ xs: 3, sm: 3, md: 3, lg: 3, xl: 3 }} justifyContent='space-between' alignItems='center'>
                  <Grid item></Grid>
                  <Grid item>
                    <Grid container alignItems='center' spacing={1}>
                      <Grid
                        item
                        sx={{
                          flexGrow: 1,
                          display: {
                            xs: 'block',
                            sm: 'block',
                            md: 'block',
                            lg: 'none',
                            xl: 'none',
                          },
                        }}
                      >
                        <Box>
                          <IconButton id='nav-button' color='primary' onClick={handleClick}>
                            <MenuIcon />
                          </IconButton>
                          <Menu
                            id='nav-menu'
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                              'aria-labelledby': 'nav-button',
                            }}
                          >
                            <MenuItem
                              onClick={() => {
                                handleMenuClick('/')
                              }}
                            >
                              Market Data
                            </MenuItem>
                            <MenuItem>
                              <ToolsAndResourcesMenu />
                            </MenuItem>
                            <MenuItem
                              onClick={() => {
                                handleMenuClick('/clientFetch')
                              }}
                            >
                              About
                            </MenuItem>
                            <MenuItem
                              onClick={() => {
                                handleMenuClick('/ssr')
                              }}
                            >
                              Support
                            </MenuItem>
                          </Menu>
                        </Box>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems='center'>
                          <Grid
                            item
                            sx={{
                              flexGrow: 1,
                              mt: 1,
                              display: {
                                xs: 'none',
                                sm: 'none',
                                md: 'none',
                                lg: 'block',
                                xl: 'block',
                              },
                            }}
                          >
                            <NLink href='/' passHref>
                              <Link>
                                <Image priority src='/images/emma-logo.png' width={151} height={60} alt='Electronic Municpial Market Access' />
                              </Link>
                            </NLink>
                          </Grid>
                          <Grid
                            item
                            sx={{
                              flexGrow: 1,
                              mt: 1,
                              display: {
                                xs: 'block',
                                sm: 'block',
                                md: 'block',
                                lg: 'none',
                                xl: 'none',
                              },
                            }}
                          >
                            <NLink href='/' passHref>
                              <Link>
                                <Image priority src='/images/emma-logo.png' width={151} height={60} alt='Electronic Municpial Market Access' />
                              </Link>
                            </NLink>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    sx={{
                      flexGrow: 1,
                      display: {
                        xs: 'none',
                        sm: 'none',
                        md: 'none',
                        lg: 'block',
                        xl: 'block',
                      },
                    }}
                  >
                    <Grid container justifyContent='space-evenly' alignItems='center' columns={{ xs: 4, sm: 4, md: 4, lg: 4, xl: 4 }}>
                      <Grid item>
                        <Button
                          //onClick={() => { router.push("/") }}
                          //color="secondary"
                          variant='text'
                        >
                          Market Data
                        </Button>
                      </Grid>
                      <Grid item>
                        <ToolsAndResourcesMenu />
                      </Grid>
                      <Grid item>
                        <Button
                          //onClick={() => { router.push("/clientFetch") }}
                          //color="secondary"
                          variant='text'
                        >
                          About
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          //onClick={() => { router.push("/ssr") }}
                          //color="secondary"
                          variant='text'
                        >
                          Support
                        </Button>

                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Grid container alignItems='center' columns={3} spacing={1}>
                      <Grid
                        item
                        sx={{
                          flexGrow: 1,
                          display: {
                            xs: 'none',
                            sm: 'block',
                            md: 'block',
                            lg: 'block',
                            xl: 'block',
                          },
                        }}
                      >
                        <TextField
                          color='primary'
                          size='small'
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position='start'>
                                <IconButton>
                                  <SearchIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        ></TextField>
                      </Grid>

                      <Grid
                        item
                        sx={{
                          flexGrow: 1,
                          display: {
                            xs: 'none',
                            sm: 'none',
                            md: 'block',
                            lg: 'block',
                            xl: 'block',
                          },
                        }}
                      >
                        {isSignedIn === false && (
                          <>
                            <Button variant='outlined'>Sign up</Button>
                          </>
                        )}
                      </Grid>

                      <Grid item>
                        {isSignedIn === true && (
                          <>
                            <Button
                              variant='outlined'
                              onClick={() => {
                                router.push('/dashboard/profile')
                              }}
                            >
                              My Account
                            </Button>
                          </>
                        )}
                        {isSignedIn === false && (
                          <>
                            <Button
                              variant='contained'
                              onClick={() => {
                                router.push('/dashboard/login')
                              }}
                            >
                              Sign In
                            </Button>
                          </>
                        )}
                        {isSignedIn === null && (<div>&nbsp;</div>)}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            </Toolbar>
          </AppBar>
      </>
    </>
  )
}

export default EmmaHeader
