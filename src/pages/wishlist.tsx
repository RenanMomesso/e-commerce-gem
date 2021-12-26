import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'
import productCardMock from 'components/ProductCardSlider/mock'
import HighlightMock from 'components/Highlights/mock'
import { initializeApollo } from 'utils/apollo'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { highlightMapper, productsMapper } from 'utils/mappers'

export default function WishListPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      products: null,
      recommendedTitle: data.recommended.section?.title,
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight[0]
      ),
      recommendedProducts: productsMapper(data.recommended?.section?.products)
    }
  }
}
