import { Box, Button, Container, Typography } from '@mui/material'
import { DrupalNode } from 'next-drupal'
import { getArticle } from 'lib/drupalApi'
import { GetServerSideProps, NextPage } from 'next'
import router from 'next/router'

export const getServerSideProps: GetServerSideProps = async (context) => {
	let id = context.params?.id as string
	let article = await getArticle(id)
	return {
		props: {
			article,
		},
	}
}

const MsrbRule: NextPage<{ article: DrupalNode }> = ({ article }) => {
	return (
		<>
			<Container>
				<Typography>
					<Button
						variant='text'
						sx={{ paddingLeft: '0px' }}
						onClick={() => {
							router.push('/ssr/rules')
						}}>
						&laquo; back
					</Button>
				</Typography>
				<Typography variant='h5'>{article.attributes.title}</Typography>
				<hr></hr>
				<Typography variant='body1'>{article.attributes.body.summary}</Typography>
				<Box dangerouslySetInnerHTML={{ __html: article.attributes.body.processed }}></Box>
			</Container>
		</>
	)
}

export default MsrbRule
