import { remark } from 'remark'
import html from 'remark-html'

export function convertMarkDown(str: string): string {
  const processedContent = remark().use(html).processSync(str)
  return processedContent.toString()
}
