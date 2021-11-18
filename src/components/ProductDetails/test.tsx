import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helper'

import ProductDetails, { ProductDetailsProps } from '.'

const props: ProductDetailsProps = {
  categoria: 'Joias',
  platforms: ['windows'],
  releaseDate: '2020-11-21T23:00:00'
}

//expect(screen.getByText(/18\+/))...

describe('<ProductDetails />', () => {
  it('should render the heading', () => {
    renderWithTheme(<ProductDetails {...props} />)

    expect(
      screen.getByRole('heading', { name: /Categoria/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Plataformas/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Release Date/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Publisher/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Peso/i })).toBeInTheDocument()
  })

  it('should render the formated data', () => {
    renderWithTheme(<ProductDetails {...props} />)

    // expect(screen.getByText(/2020\+/)).toBeInTheDocument()
  })
})
