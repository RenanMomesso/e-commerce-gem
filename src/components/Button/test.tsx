import { AddShoppingCart } from '@styled-icons/material-outlined'
import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/helper'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size button by default', () => {
    renderWithTheme(<Button size="medium">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem'
    })
  })
  it('should render the small size button ', () => {
    renderWithTheme(<Button size="small">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '3rem'
    })
  })

  it('should render minimal version button ', () => {
    renderWithTheme(<Button minimal>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      background: 'none',
      color: theme.colors.primary
    })
  })
  it('should render the big size button', () => {
    renderWithTheme(<Button size="large">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '5rem'
    })
  })

  it('should render the full width button', () => {
    renderWithTheme(
      <Button size="small" fullWidth>
        Buy now
      </Button>
    )

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      width: '100%'
    })
  })
  it('should render an icon version', () => {
    renderWithTheme(
      <Button size="small" icon={<AddShoppingCart data-testid="icon" />}>
        Buy now
      </Button>
    )

    expect(screen.getByText(/Buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render Button as a Link', () => {
    const { debug, container } = renderWithTheme(
      <Button as="a" href="/link">
        Buy now
      </Button>
    )

    debug(container)
    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })

  it('should render disabled button', () => {
    renderWithTheme(<Button disabled>buy now</Button>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    )
  })
})
