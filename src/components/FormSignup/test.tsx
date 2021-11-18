import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helper'

import FormSignup from '.'

describe('<FormSignup />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormSignup />)

    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument
    expect(screen.getByPlaceholderText('ConfirmPassword')).toBeInTheDocument
    expect(screen.getByRole('button', { name: /cadastrar/i })).toBeInTheDocument
  })

  it('should render the text and link to sign up', () => {
    renderWithTheme(<FormSignup />)
    expect(screen.getByRole('link', { name: /entrar/i })).toBeInTheDocument()
    expect(screen.getByText(/Já possui conta/i)).toBeInTheDocument()
  })
})
