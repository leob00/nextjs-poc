import React from 'react'
import NLink from 'next/link'
import { Card, Link, List, ListItem, Stack } from '@mui/material'
import Tx from 'components/Tx/Tx'

const Band = () => {
  return (
    <Stack direction='row' spacing={3} px={2} pb={3} justifyContent='center'>
      <Card elevation={2} sx={{ minWidth: 200, p: 2 }}>
        <Tx tx={{ attributes: { variant: 'h3', text: 'Next JS', href: 'https://nextjs.org', gutterBottom: true } }} />
        <Tx tx={{ attributes: { variant: 'body1', text: 'A framework built on top of React, examples using BondWave Yield Curve', gutterBottom: true } }} />
        <ul style={{ listStyle: 'none' }}>
          <li>
            <NLink href='/ssg/YieldCurve' passHref>
              <Link>SSG - Static Site Generation</Link>
            </NLink>
          </li>
          <li>
            <NLink href='/ssr/YieldCurve' passHref>
              <Link>SSR - Server Side Rendering</Link>
            </NLink>
          </li>
          <li>
            <NLink href='/ssr/RandomDogs' passHref>
              <Link>SSR (Now with dogs!)</Link>
            </NLink>
          </li>
          <li>
            <NLink href='/csr/YieldCurve' passHref>
              <Link>CSR - Client Side Rendering</Link>
            </NLink>
          </li>
        </ul>
      </Card>
      <Card elevation={2} sx={{ minWidth: 200, p: 2 }}>
        <Tx tx={{ attributes: { variant: 'h3', text: 'Strapi', href: 'https://strapi.io', gutterBottom: true } }} />
        <Tx tx={{ attributes: { variant: 'body1', text: 'A hot new CMS, same examples with the text content coming from Strapi CMS', gutterBottom: true } }} />
        <ul style={{ listStyle: 'none' }}>
          <li>
            <NLink href='/ssg/YieldCurveStrapi' passHref>
              <Link>SSG</Link>
            </NLink>
          </li>
          <li>
            <NLink href='/ssr/YieldCurveStrapi' passHref>
              <Link>SSR</Link>
            </NLink>
          </li>
          <li>
            <NLink href='/csr/YieldCurveStrapiSSG' passHref>
              <Link>SSG/CSR</Link>
            </NLink>
          </li>
          <li>
            <NLink href='/csr/YieldCurveStrapiSSR' passHref>
              <Link>SSR/CSR</Link>
            </NLink>
          </li>
        </ul>
        <Tx tx={{ attributes: { variant: 'body1', text: 'And an example using MSRB rules', gutterBottom: true } }} />
        <ul style={{ listStyle: 'none' }}>
          <li>
            <NLink href='/msrb-rules' passHref>
              <Link>MSRB Rules (SSG)</Link>
            </NLink>
          </li>
        </ul>
      </Card>
      <Card elevation={2} sx={{ minWidth: 200, p: 2 }}>
        <Tx tx={{ attributes: { variant: 'h3', text: 'Drupal', href: 'https://www.drupal.org', gutterBottom: true } }} />
        <Tx tx={{ attributes: { variant: 'body1', text: 'An industry heavy weight CMS, examples using MSRB Rules', gutterBottom: true } }} />
        <ul style={{ listStyle: 'none' }}>
          <li>
            <NLink href='/ssg/rules' passHref>
              <Link>MSRB Rules (SSG)</Link>
            </NLink>
          </li>
          <li>
            <NLink href='/ssr/rules' passHref>
              <Link>MSRB Rules (SSR)</Link>
            </NLink>
          </li>
        </ul>
      </Card>
    </Stack>
  )
}

export default Band
