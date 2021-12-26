import Link from 'next/link'
import Button from 'components/Button'
import ProductItem, { ProductItemProps } from 'components/ProductItem'

import * as S from './styles'
import Empty from 'components/Empty'

export type CartListProps = {
  hasButton?: boolean
  items?: ProductItemProps[]
  total?: string
}

const CartList = ({ hasButton = false, items = [], total }: CartListProps) => {
  return (
    <S.Wrapper isEmpty={!items.length}>
      {items.length ? (
        <>
          {' '}
          {items.map((item) => (
            <ProductItem key={item.title} {...item} />
          ))}
          <S.Footer>
            {!hasButton && <span>Total:</span>}
            <S.Total>{total}</S.Total>
            {hasButton && (
              <Link href="/cart" passHref>
                <Button as="a">Buy it now</Button>
              </Link>
            )}
          </S.Footer>
        </>
      ) : (
        <Empty
          description="Nenhum produto no carrinho"
          title="Carrinho está vazio"
        />
      )}
    </S.Wrapper>
  )
}

export default CartList
