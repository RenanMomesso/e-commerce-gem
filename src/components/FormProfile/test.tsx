import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helper'

import FormProfile from '.'

describe('<FormProfile />', () => {
  it('should render the heading', () => {
    renderWithTheme(<FormProfile />)

    expect(
      screen.getByRole('heading', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /e-mail/i })).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText(/Type your password/i)
    ).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText(/Type new password/i)
    ).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument()
  })
})
