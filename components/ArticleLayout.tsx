import { Container, Typography, Button, Box } from '@mui/material'
import { DrupalNode } from 'next-drupal'
import router from 'next/router'
import React from 'react'

const ArticleLayout = ({ article }: { article: DrupalNode }) => {
  return (
    <Container>
      <Button
        variant='text'
        onClick={() => {
          router.push('/ssg/rules')
        }}>
        &#8592; back
      </Button>
      <Typography variant='h6'>{article.attributes.title}</Typography>
      <hr></hr>
      <Typography variant='body1'>{article.attributes.body.summary}</Typography>
      <Box dangerouslySetInnerHTML={{ __html: article.attributes.body.processed }}></Box>
    </Container>
  )
}

export default ArticleLayout
