import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/helper'

import ProfileMenu from '.'

describe('<ProfileMenu />', () => {
  it('should render the 4 links', () => {
    renderWithTheme(<ProfileMenu />)

    expect(screen.getByRole('link', { name: /my profile/i })).toHaveAttribute(
      'href',
      '/profile/me'
    )
    expect(screen.getByRole('link', { name: /My cards/i })).toHaveAttribute(
      'href',
      '/profile/cards'
    )
    expect(screen.getByRole('link', { name: /My orders/i })).toHaveAttribute(
      'href',
      '/profile/orders'
    )
    expect(screen.getByRole('link', { name: /sign out/i })).toHaveAttribute(
      'href',
      '/logout'
    )
  })

  it('should rener the menu an active link defined', () => {
    renderWithTheme(<ProfileMenu activeLink="/profile/cards" />)

    expect(screen.getByRole('link', { name: /my cards/i })).toHaveStyle({
      background: theme.colors.primary,
      color: theme.colors.white
    })
  })
})
