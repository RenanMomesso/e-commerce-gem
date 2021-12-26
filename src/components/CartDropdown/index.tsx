import CartIcon from 'components/CartIcon'
import CartList from 'components/CartList'
import Dropdown from 'components/Dropdown'
import { ProductItemProps } from 'components/ProductItem'

import * as S from './styles'

export type CartDropdownProps = {
  items?: ProductItemProps[]
  total?: string
}
const CartDropdown = ({ items = [], total = 'R$ 0' }: CartDropdownProps) => (
  <S.Wrapper>
    <Dropdown title={<CartIcon quantity={items.length} />}>
      <CartList items={items} total={total} hasButton />
    </Dropdown>
  </S.Wrapper>
)

export default CartDropdown
