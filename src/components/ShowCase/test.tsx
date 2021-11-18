import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helper'

import 'match-media-mock'

import ProductsMock from 'components/ProductCardSlider/mock'
import HighlightMock from 'components/Highlights/mock'

import ShowCase, { ShowCaseProps } from '.'

const props: ShowCaseProps = {
  title: 'Most Popular',
  highlight: HighlightMock,
  products: ProductsMock
}

describe('<ShowCase />', () => {
  it('should render the heading', () => {
    renderWithTheme(<ShowCase {...props} />)

    expect(
      screen.getByRole('heading', { name: 'Most Popular' })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: HighlightMock.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: ProductsMock[0].title })
    ).toBeInTheDocument()
  })

  it('should render the showcase without title', () => {
    renderWithTheme(
      <ShowCase products={props.products} highlight={props.highlight} />
    )
    expect(
      screen.getByRole('heading', { name: HighlightMock.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: ProductsMock[0].title })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: 'Most Popular' })
    ).not.toBeInTheDocument()
  })

  it('should render the showcase without highlights', () => {
    renderWithTheme(<ShowCase products={props.products} title={props.title} />)

    screen.queryByRole('heading', { name: HighlightMock.title })
    screen.getByRole('heading', { name: ProductsMock[0].title })

    expect(
      screen.getByRole('heading', { name: 'Most Popular' })
    ).toBeInTheDocument()
  })

  it('should render the showcase without products', () => {
    renderWithTheme(
      <ShowCase highlight={props.highlight} title={props.title} />
    )

    //if its true or exists, than the test should pass or test the next step
    screen.getByRole('heading', { name: 'Most Popular' })
    screen.getByRole('heading', { name: HighlightMock.title })

    expect(
      screen.queryByRole('heading', { name: ProductsMock[0].title })
    ).not.toBeInTheDocument()
  })
})
