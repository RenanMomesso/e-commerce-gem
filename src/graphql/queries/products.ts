import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { ProductFragment } from 'graphql/fragments/products'
import { products, productsVariables } from 'graphql/generated/products'

export const QUERY_GAMES = gql`
  query products($limit: Int!, $start: Int!) {
    products(limit: $limit, start: $start) {
      ...ProductFragment
    }
  }
  ${ProductFragment}
`

export const QUERY_GAME_BY_SLUG = gql`
  query QueryBySlug($slug: String) {
    products(where: { slug: $slug }) {
      id
      name
      slug
      short_description
      description
      price
      cover {
        src: url
      }
      gallery {
        src: url
        label: alternativeText
      }
      category {
        name
      }
    }
  }
`

export function useQueryProducts(
  options?: QueryHookOptions<products, productsVariables>
) {
  return useQuery<products, productsVariables>(QUERY_GAMES, options)
}
