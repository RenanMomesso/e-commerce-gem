import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helper'

import ProductInfo from '.'

const props = {
  title: 'My Product title',
  description: 'Game Description',
  price: 'R$ 210,00'
}

describe('<ProductInfo />', () => {
  it('should render the product informations', () => {
    renderWithTheme(<ProductInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /my product title/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/210/)).toBeInTheDocument()
  })

  it('should render buttons', () => {
    renderWithTheme(<ProductInfo {...props} />)

    expect(screen.getByRole('button', { name: /Comprar/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Favoritos/i })
    ).toBeInTheDocument()
  })
})
