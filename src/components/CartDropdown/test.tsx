import { screen } from '@testing-library/react'
import items from 'components/CartList/mock'
import { renderWithTheme } from 'utils/helper'
import CartDropdown from '.'

describe('<CartDropdown />', () => {
  beforeEach(() => {
    renderWithTheme(<CartDropdown items={items} total="R$ 300,00" />)
  })
  it('should render <CartIcon and badge/>', () => {
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${items.length}`)).toBeInTheDocument()
  })

  it('should render <CartIcon and badge/>', () => {
    expect(screen.getByText('R$ 300,00')).toBeInTheDocument()
    expect(screen.getByText(/Ouro Prata/i)).toBeInTheDocument()
  })
})
