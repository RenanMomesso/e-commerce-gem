import Cart, { CartProps } from 'templates/Cart'

import itemsMock from 'components/CartList/mock'
import productCardMock from 'components/ProductCardSlider/mock'
import HighlightMock from 'components/Highlights/mock'
import CardsMock from 'components/PaymentOptions/mock'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      items: itemsMock,
      total: '$ 430.00',
      cards: CardsMock,
      recommendedHighlight: HighlightMock,
      recommendedProducts: productCardMock.slice(0, 5)
    }
  }
}
