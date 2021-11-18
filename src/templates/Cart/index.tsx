import CartList, { CartListProps } from 'components/CartList'
import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import Empty from 'components/Empty'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlights'
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions'
import { ProductCardProps } from 'components/ProductCard'
import ShowCase from 'components/ShowCase'
import Base from 'templates/Base'
import * as S from './styles'

export type CartProps = {
  recommendedProducts: ProductCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>

const Cart = ({
  recommendedHighlight,
  recommendedProducts,
  items,
  total,
  cards
}: CartProps) => {
  const handlePayment = () => ({})
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Meu carrinho
        </Heading>

        {items.length ? (
          <S.Content>
            <CartList items={items} total={total} />
            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </S.Content>
        ) : (
          <Empty
            title="Seu carrinho está vazio"
            description="Volte e explore nossos produtos"
            hasLink
          />
        )}

        <Divider />

        <ShowCase
          title="Você pode gostar destes produtos"
          products={recommendedProducts}
          highlight={recommendedHighlight}
        />
      </Container>
    </Base>
  )
}
export default Cart
