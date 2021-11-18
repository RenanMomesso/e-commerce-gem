import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helper'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Ribbon>Ribbon</Ribbon>)

    expect(screen.getByText(/ribbon/i)).toBeInTheDocument()
  })

  it('should render the ribbon with default primary color', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    })
  })

  it('should render the ribbon with secondary color', () => {
    const { getByText } = renderWithTheme(
      <Ribbon color="secondary">Best Seller</Ribbon>
    )

    expect(getByText(/best seller/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render the ribbon with normal size as default', () => {
    const { getByText } = renderWithTheme(
      <Ribbon color="secondary">Best Seller</Ribbon>
    )

    expect(getByText(/best seller/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })

  it('should render the ribbon with small size', () => {
    const { debug, container, getByText } = renderWithTheme(
      <Ribbon sizes="small">Best Seller</Ribbon>
    )

    debug(container)

    expect(getByText(/best seller/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
