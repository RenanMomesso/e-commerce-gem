import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helper'
import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>JuJoias</Heading>)
    expect(screen.getByRole('heading', { name: /jujoias/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a white heading with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>JuJoias</Heading>)
    expect(screen.getByRole('heading', { name: /jujoias/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })
  })

  it('should render a white heading with a line to the bottom side', () => {
    renderWithTheme(
      <Heading lineBottom lineColor="primary">
        JuJoias
      </Heading>
    )
    expect(screen.getByRole('heading', { name: /jujoias/i })).toHaveStyleRule(
      'border-bottom',
      '0.7rem solid #F231A5',
      { modifier: '::after' }
    )
  })

  it('should render a white heading with small size', () => {
    renderWithTheme(
      <Heading lineBottom size="small" lineColor="primary">
        JuJoias
      </Heading>
    )
    expect(screen.getByRole('heading', { name: /jujoias/i })).toHaveStyle({
      'font-size': '1.6rem'
    })
    expect(screen.getByRole('heading', { name: /jujoias/i })).toHaveStyleRule(
      'border-bottom',
      '0.7rem solid #F231A5',
      { modifier: '::after' }
    )
  })
})
