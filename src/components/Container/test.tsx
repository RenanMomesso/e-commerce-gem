import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/helper'

import { Container } from '.'

describe('<Container />', () => {
  it('should render container with correct styles', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Julyana Ecommerce</span>
      </Container>
    )
    const containerMain = screen.getByText(/Julyana Ecommerce/i)
    expect(containerMain.parentElement).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )

    expect(container.firstChild).toMatchInlineSnapshot(` `)
  })
})
