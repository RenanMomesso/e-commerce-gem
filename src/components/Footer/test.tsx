import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/helper'
import Footer from '.'

describe('<Footer />', () => {
  it('should render 4 columns topic', () => {
    renderWithTheme(<Footer />)
    expect(
      screen.getByRole('heading', { name: /Contact/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Follow us/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /location/i })
    ).toBeInTheDocument()
  })
})
