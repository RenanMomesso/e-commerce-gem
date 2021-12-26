import { gql } from '@apollo/client'
import { BannerFragment } from 'graphql/fragments/banner'
import { HighLightFragment } from 'graphql/fragments/highlight'
import { ProductFragment } from 'graphql/fragments/products'

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      ...BannerFragment
    }

    newProducts: products(sort: "createdAt:asc", limit: 8) {
      ...ProductFragment
    }

    upcomingProducts: products(sort: "price:desc", limit: 8) {
      ...ProductFragment
    }

    onWished: products(
      where: { category: { name: "Brincos" } }
      sort: "price:desc"
      limit: 8
    ) {
      ...ProductFragment
    }
    sections: home {
      newProducts {
        title
        highlight {
          ...HighLightsFragment
        }
      }
      popularProducts {
        title
        highlight {
          ...HighLightsFragment
        }
        products(limit: 8) {
          ...ProductFragment
        }
      }
      favoritesProducts {
        title
        highlight {
          ...HighLightsFragment
        }
      }
      upcomingProducts {
        title
        highlight {
          ...HighLightsFragment
        }
      }

      newProducts {
        title
        highlight {
          ...HighLightsFragment
        }
      }
    }
  }
  ${HighLightFragment}
  ${BannerFragment}
  ${ProductFragment}
`
