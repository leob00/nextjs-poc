import React from 'react'
import type { NextPage } from 'next'
import NLink from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { strapiClient, gql } from 'lib/strapiGraphQL'
import { Box, Link, Typography } from '@mui/material'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

interface MsrbRule {
  attributes: {
    name: string
    number: string
    description: string
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const client = strapiClient()
  const { data } = await client.query({
    query: gql`
      query getMsrbRules {
        msrbRules(sort: "order") {
          data {
            id
            attributes {
              name
              number
              description
              order
            }
          }
        }
      }
    `,
  })
  return {
    props: {
      data: data.msrbRules.data,
    },
  }
}

const MsrbRulesStrapi: NextPage<{ data: MsrbRule[] }> = ({ data }) => {
  return (
    <>
      <Box sx={{ borderTop: '2px solid lightgray', minHeight: 500, paddingTop: 4 }} pt={4}>
        <Box sx={{ width: '80%', margin: 'auto' }}>
          <Typography variant='h6'>MSRB Rules and Guidance</Typography>
          <Typography variant='h6'>General Rules</Typography>
          <Box sx={{ borderTop: '1px solid lightgray', marginTop: 0.5 }}>
            <TableContainer component={Paper}>
              <Table sx={{ width: 500 }} size='small' aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell align='left'>Number</TableCell>
                    <TableCell align='left'>Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((item, ix) => (
                    <TableRow key={ix}>
                      <TableCell align='left'>
                        <NLink href={`rules/${item.attributes.name}`} passHref>
                          <Link href='/'>{item.attributes.number}</Link>
                        </NLink>
                      </TableCell>
                      <TableCell align='left'>{item.attributes.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default MsrbRulesStrapi
