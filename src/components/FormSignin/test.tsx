import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helper'

import FormSignin from '.'

describe('<FormSignin />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormSignin />)

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument
  })

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignin />)

    expect(
      screen.getByRole('link', { name: /Esqueci minha senha/i })
    ).toBeInTheDocument()
  })

  it('should render the text and link to sign up', () => {
    renderWithTheme(<FormSignin />)
    expect(
      screen.getByRole('link', { name: /Cadastre-se/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/Não tem conta ainda/i)).toBeInTheDocument()
  })
})
