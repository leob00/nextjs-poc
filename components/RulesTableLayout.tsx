import React from 'react'
import NLink from 'next/link'
import router from 'next/router'
import { Button, Container, Typography, Divider, Table, TableBody, TableRow, TableCell, Link } from '@mui/material'
import { DrupalNode } from 'next-drupal'

const RulesTableLayout = ({ articles, renderType }: { articles: DrupalNode[]; renderType: string }) => {
  return (
    <Container>
      <Button
        variant='text'
        onClick={() => {
          router.push('/')
        }}>
        &#8592; back
      </Button>
      <Typography variant='h6'>MSRB Rules</Typography>
      <Divider />
      <Table>
        <TableBody>
          {articles.map((article) => (
            <TableRow key={article.id}>
              <TableCell>
                <NLink href={`/${renderType}/rules/${article.id}`} passHref>
                  <Link>{`${article.attributes.title}`}</Link>
                </NLink>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  )
}

export default RulesTableLayout
