import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/helper'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  beforeEach(() => {
    renderWithTheme(<UserDropdown username="renanmomesso" />)
  })

  it('should render the heading', () => {
    expect(screen.getByText(/renanmomesso/i)).toBeInTheDocument()
  })

  it('should render links when clicked', () => {
    userEvent.click(screen.getByText(/renanmomesso/i))

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })
})
