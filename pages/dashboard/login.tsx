import React from 'react'
import router from 'next/router'
import Image from 'next/image'
import NLink from 'next/link'
import { handleLogin, isLoggedIn } from 'lib/auth'
import { Box, Button, Container, Link, Stack, TextField, Typography } from '@mui/material'

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = (event: any) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event: any) => {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      router.replace(`/dashboard/profile`)
    }

    return (
      <>
        <>
          <Box sx={{ bgcolor: '#003668', py: 8, }} justifyContent='center' alignItems='center' >
            <Container maxWidth='xs'>
              <Box justifyContent='center' alignItems='center' width={400} sx={{ bgcolor: '#ffffff', p: 2, }} >
                <form
                  method='post'
                  onSubmit={(event) => {
                    this.handleSubmit(event)
                    router.push(`/dashboard/profile`)
                  }}
                >
                  <Stack spacing={2} justifyContent='center'>
                    <Box sx={{ mt: 3 }}>
                      <Image src='/images/msrb-logo.png' width={182} height={50} alt='Municipal Securities Rulemaking Board' />
                    </Box>
                    <Typography align='center' color='primary' variant='h3'>
                      Sign In
                    </Typography>
                    <TextField name='username' variant='outlined' label='Username' onChange={this.handleUpdate} color='primary' required />
                    <TextField name='password' variant='outlined' type='password' label='Password' onChange={this.handleUpdate} color='primary' required />
                    <Button variant='contained' color='primary' type='submit'>
                      Sign in
                    </Button>
                    <NLink href='/' passHref>
                      <Link href='/'>Reset or forgot password?</Link>
                    </NLink>
                  </Stack>
                </form>
              </Box>
            </Container>
          </Box>
        </>
      </>
    )
  }
}

export default Login
