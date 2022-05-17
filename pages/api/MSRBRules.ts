import type { NextApiRequest, NextApiResponse } from 'next'
import { DrupalNode } from 'next-drupal'
import { getRules } from 'lib/drupalApi'

export default async function handler(req: NextApiRequest, res: NextApiResponse<DrupalNode[]>) {
  var data = await getRules()
  res.status(200).json(data)
}
