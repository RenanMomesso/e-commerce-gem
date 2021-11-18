import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/helper'

import Auth from '.'

describe('<Auth />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    )

    //verifiquem se tem 2 logos
    expect(
      screen.getAllByRole('img', { name: /JulyanaEcommerceJoias/i })
    ).toHaveLength(2)

    // verifica se tem o heading principal do banner
    expect(
      screen.getByRole('heading', {
        name: /Todas joias que você ama em um só lugar/i
      })
    ).toBeInTheDocument()
    //verifica se sem o subtitle
    expect(
      screen.getByRole('heading', {
        name: /Violetas é a melhor e mais completa loja de joias/i
      })
    ).toBeInTheDocument()
    //verficia o title do content

    // verifica se o children tá sendo renderizado
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
