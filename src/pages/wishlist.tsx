import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'
import productCardMock from 'components/ProductCardSlider/mock'
import HighlightMock from 'components/Highlights/mock'

export default function WishListPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      products: null,
      recommendedHighlight: HighlightMock,
      recommendedProducts: productCardMock.slice(0, 5)
    }
  }
}
