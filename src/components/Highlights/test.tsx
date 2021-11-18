import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helper'

import Highlights, { HighlightProps } from '.'
import * as S from './styles'

const props: Pick<
  HighlightProps,
  'title' | 'subtitle' | 'buttonLabel' | 'buttonLink' | 'backgroundImage'
> = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  backgroundImage: '/img/jewlery1.jpg',
  buttonLabel: 'Buy now',
  buttonLink: 'LinkButton'
}

describe('<Highlights />', () => {
  it('should render the title and subtitle', () => {
    renderWithTheme(<Highlights {...props} />)

    expect(
      screen.getByRole('heading', { name: /Heading 1/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/Heading 2/i)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })

  it('should render backgroundImage', () => {
    renderWithTheme(<Highlights {...props} />)
    const bgImage = screen.getByLabelText(/bgimage/i)
    expect(bgImage).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })

  it('should render float image', () => {
    renderWithTheme(
      <Highlights {...props} floatImage="/img/float-image-bg.png" />
    )

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/img/float-image-bg.png'
    )
  })

  it('should render align right by default', () => {
    renderWithTheme(<Highlights {...props} />)

    const bgImage = screen.getByLabelText(/bgimage/i)

    expect(bgImage).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'"
    )

    expect(bgImage).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })
  })

  it('should render align left by default', () => {
    renderWithTheme(<Highlights alignment="left" {...props} />)

    const bgImage = screen.getByLabelText(/bgimage/i)

    expect(bgImage).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'"
    )

    expect(bgImage).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    })
  })
})
