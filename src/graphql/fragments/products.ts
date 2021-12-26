import { gql } from '@apollo/client'

export const ProductFragment = gql`
  fragment ProductFragment on Product {
    name
    slug
    price
    cover {
      url
    }
    category {
      name
    }
  }
`
