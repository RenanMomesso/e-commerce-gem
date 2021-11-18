import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helper'
import 'jest-styled-components'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a red label by default', () => {
    renderWithTheme(<Logo />)
    expect(
      screen.getByLabelText(/JulyanaEcommerceJoias/i).parentElement
    ).toHaveStyle({ color: '#FF6347' })
  })

  it('should render a #030517 label by default', () => {
    renderWithTheme(<Logo color="black" />)
    expect(
      screen.getByLabelText(/JulyanaEcommerceJoias/i).parentElement
    ).toHaveStyle({ color: '#030517' })
  })

  it('should render a big logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(
      screen.getByLabelText(/JulyanaEcommerceJoias/i).parentElement
    ).toHaveStyle({ width: '7rem' })
  })

  it('should render a normal logo', () => {
    renderWithTheme(<Logo />)
    expect(
      screen.getByLabelText(/JulyanaEcommerceJoias/i).parentElement
    ).toHaveStyle({ width: '4rem' })
  })

  it('should render a bigger logo without text if hideOnmobile', () => {
    renderWithTheme(<Logo hideOnMobile />)
    expect(
      screen.getByLabelText(/JulyanaEcommerceJoias/i).parentElement
    ).toHaveStyleRule('width', '5.8rem', { media: '(max-width:768px)' })
  })
})
