import { gql } from '@apollo/client'
import { HighLightFragment } from 'graphql/fragments/highlight'
import { ProductFragment } from 'graphql/fragments/products'
export const QUERY_RECOMMENDED = gql`
  query QueryRecommended {
    recommended {
      section {
        title
        highlight {
          alignment
          title
          subtitle
          background {
            url
          }
          buttonLabel
          buttonLink
          floatImage {
            url
          }
        }
        products {
          ...ProductFragment
        }
      }
    }
  }
  ${ProductFragment}
`
