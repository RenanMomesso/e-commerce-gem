// import Link from 'next/link'
// import Button from 'components/Button'
import ProductItem, { ProductItemProps } from 'components/ProductItem'

import * as S from './styles'
// import Empty from 'components/Empty'

export type CartListProps = {
  hasButton?: boolean
  items: ProductItemProps[]
  total: string
}

const CartList = ({ hasButton = false, items, total }: CartListProps) => {
  return (
    <S.Wrapper>
      {items.map((item) => (
        <ProductItem key={item.title} {...item} />
      ))}
      <S.Footer>
        {hasButton} Total <S.Total>{total}</S.Total>
      </S.Footer>
    </S.Wrapper>
  )
}

export default CartList
