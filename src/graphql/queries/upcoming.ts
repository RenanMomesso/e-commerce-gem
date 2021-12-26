import { gql } from '@apollo/client'
import { HighLightFragment } from 'graphql/fragments/highlight'
import { ProductFragment } from 'graphql/fragments/products'

export const QUERY_UPCOMING = gql`
  query QueryUpcomming {
    upcomingProducts: products(sort: "price:desc", limit: 8) {
      ...ProductFragment
    }

    showcase: home {
      upcomingProducts {
        title
        highlight {
          ...HighLightsFragment
        }
      }
    }
  }
  ${HighLightFragment}
  ${ProductFragment}
`
