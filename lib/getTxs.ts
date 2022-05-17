import { strapiClient, gql } from './strapiGraphQL'

export type TxVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline' | 'inherit' | undefined

export interface TxData {
  id?: string
  attributes: {
    name?: string
    order?: number
    variant: TxVariant
    text: string
    gutterBottom?: boolean
    href?: string
    html?: string
  }
}

export async function getTxs(pgName: string): Promise<TxData[]> {
  const client = strapiClient()
  const { data } = await client.query({
    query: gql`
      query getTxs($name: String!) {
        txs(filters: { name: { contains: $name } }, sort: "order") {
          data {
            id
            attributes {
              name
              order
              variant
              text
              gutterBottom
              href
            }
          }
        }
      }
    `,
    variables: { name: pgName },
  })
  return data.txs.data as TxData[]
}
