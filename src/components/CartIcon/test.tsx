import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helper'

import CartIcon from '.'

describe('<CartIcon />', () => {
  it('should render cart', () => {
    renderWithTheme(<CartIcon />)

    expect(screen.getByLabelText(/Shopping Cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it('should render cart with badge', () => {
    renderWithTheme(<CartIcon quantity={3} />)

    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument()
    expect(screen.getByText(/3/)).toBeInTheDocument()
  })

  it('should render cart without badge with less or equal to 0', () => {
    renderWithTheme(<CartIcon quantity={-1} />)

    expect(screen.queryByLabelText(/cart items/i)).toBeInTheDocument()
    expect(screen.queryByText(/-1/)).toBeInTheDocument()
  })
})
