import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helper'

import CartList from '.'
import mockItems from './mock'

describe('<CartList />', () => {
  it('should render carlist', () => {
    renderWithTheme(<CartList items={mockItems} total="R$ 300,00" />)

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('R$ 300,00')).toHaveStyle({ color: '#F231A5' })
  })

  it('should render the button', () => {
    renderWithTheme(<CartList items={mockItems} total="R$ 300,00" hasButton />)

    expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
  })

  it('should render empty if there are no game', () => {
    renderWithTheme(<CartList />)

    expect(screen.getByText(/Carrinho está vazio/i)).toBeInTheDocument()
  })
})
