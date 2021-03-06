import type { NextApiRequest, NextApiResponse } from 'next'
import { DrupalNode } from 'next-drupal'
import { getArticle } from 'lib/drupalApi'

export default async function handler(req: NextApiRequest, res: NextApiResponse<DrupalNode>) {
  let id = req.query['id'] as string
  var data = await getArticle(id)
  res.status(200).json(data)
}
