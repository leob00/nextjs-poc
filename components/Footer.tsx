import * as React from 'react'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
//import msrbLogo from '../assets/images/msrbLogo.png';
//import { Link } from 'gatsby';
//import { navigate } from 'gatsby';
import useRouter from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

const isLoggedIn = () => false

const EmmaFooter = () => {
  const router = useRouter
  return (
    <>
      {/* <Box
                sx={{
                    bgcolor: 'background.paper',
                    borderTop: 1,
                    borderTopColor: '#eeeeee',
                    borderTopWidth: 3,
                    pt: 5,
                    pb: 5,
                }}
            >
                <Container maxWidth="sm">
                    {isLoggedIn() ? (
                        <>
                            <Typography
                                component="h4"
                                variant="h4"
                                align="center"
                                color="secondary"
                            >
                                Learn more about EMMA?
                            </Typography>
                            <Stack
                                sx={{ pt: 4 }}
                                direction="row"
                                spacing={2}
                                justifyContent="center"
                            >
                                <Button color="secondary" variant="contained">
                                    Learn More
                                </Button>
                            </Stack>
                        </>
                    ) : (
                        <>
                            <Typography
                                component="h4"
                                variant="h4"
                                align="center"
                                color="secondary"
                            >
                                Sign in to personalize your EMMA experience
                            </Typography>
                            <Stack
                                sx={{ pt: 4 }}
                                direction="row"
                                spacing={2}
                                justifyContent="center"
                            >
                                <Button color="secondary" variant="outlined">
                                    Sign up
                                </Button>
                                <Button color="secondary" variant="contained"
                                    onClick={event => { router.push("/dashboard/login") }}
                                >
                                    Sign In
                                </Button>
                            </Stack>
                        </>
                    )}
                </Container>
            </Box> */}
      <>
        <Box
          sx={{
            bgcolor: '#eeeeee',
            borderTop: '1px solid lightgray',
          }}>
          <Box sx={{ mx: 5, pb: 2 }}>
            <Stack>
              <Stack direction='row' spacing='2' justifyContent='space-between' alignItems='flex-start'>
                <div>
                  <h4>
                    Get started
                    <div>
                      <Typography variant='body2' color='text.secondary'>
                        <Link href='/'>
                          <a>Find Issuers</a>
                        </Link>
                        <br />
                        <Link href='/'>
                          <a>Find Securities</a>
                        </Link>
                        <br />
                        <Link href='/'>
                          <a>Market Data</a>
                        </Link>
                        <br />
                        <Link href='/'>
                          <a>Tools &amp; </a>
                        </Link>
                      </Typography>
                    </div>
                  </h4>
                </div>
                <div>
                  <h4>
                    Get help
                    <div>
                      <Typography variant='body2' color='text.secondary'>
                        <Link href='/'>
                          <a>Support</a>
                        </Link>
                        <br />
                        <Link href='/'>
                          <a>Contact</a>
                        </Link>
                      </Typography>
                    </div>
                  </h4>
                </div>
                <div>
                  <h4>
                    About
                    <div>
                      <Typography variant='body2' color='text.secondary'>
                        <Link href='/'>
                          <a>About EMMA</a>
                        </Link>
                        <br />
                        <Link href='/'>
                          <a>About MSRB</a>
                        </Link>
                        <br />
                        <Link href='/'>
                          <a>Careers</a>
                        </Link>
                      </Typography>
                    </div>
                  </h4>
                </div>
                <div>
                  <Box sx={{ mt: 3 }}>
                    <Image src='/images/msrb-logo.png' width={182} height={50} alt='Municipal Securities Rulemaking Board' />
                  </Box>
                </div>
              </Stack>
              <div>
                <Typography variant='body2' color='text.secondary'>
                  © 2022 <a href='https://www.msrb.org'>Municipal Securities Rulemaking Board</a> (MSRB)
                  <br />
                  <br />
                  EMMA is a service of the Municipal Securities Rulemaking Board, which protects investors, state and local governments, and the public interest. Portions of EMMA data provided by ICE Data Pricing &amp; Reference Data, LLC., CUSIP
                  Global Services &amp; American Bankers Association.
                  <br />
                  <br />
                  Ratings data are provided by the following and are reprinted with permission, and copyright notices for the respective owners are as follows: Copyright © 2022, Fitch, Inc. All rights reserved. Copyright © 2022, Kroll Bond Rating
                  Agency, Inc., and/or its licensors and affiliates (together, &quot;KBRA&quot;). All rights reserved. Copyright © 2022, Moody&apos;s Corporation, Moody&apos;s Investors Service, Inc., Moody&apos;s Analytics, Inc. and/or their
                  licensors and affiliates (collectively, &quot;MOODY&apos;S&quot;). All rights reserved. Copyright © 2022, Standard and Poor&apos;s Financial Services LLC. All rights reserved.
                </Typography>
              </div>
            </Stack>
          </Box>
        </Box>
      </>
    </>
  )
}

export default EmmaFooter
