import Empty from 'components/Empty'
import Heading from 'components/Heading'
import ProductItem, { ProductItemProps } from 'components/ProductItem'
import * as S from './styles'

export type OrdersListProps = {
  items?: ProductItemProps[]
}
const OrderList = ({ items }: OrdersListProps) => (
  <S.Wrapper>
    <Heading lineBottom lineColor="primary" color="black" size="small">
      My orders
    </Heading>

    {items?.length ? (
      items.map((item) => <ProductItem key={item.downloadLink} {...item} />)
    ) : (
      <Empty
        title="Você não tem nenhum pedido ainda"
        description="Volte para a loja e faça suas compras!!"
        hasLink
      />
    )}
  </S.Wrapper>
)

export default OrderList
