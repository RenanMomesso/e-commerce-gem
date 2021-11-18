import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helper'

import productCardMock from 'components/ProductCardSlider/mock'
import HighlightMock from 'components/Highlights/mock'

import Wishlist, { WishlistTemplateProps } from '.'

const props: WishlistTemplateProps = {
  recommendedHighlight: HighlightMock,
  recommendedProducts: productCardMock
}

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

describe('<Wishlist />', () => {
  it('should render showcase', () => {
    renderWithTheme(<Wishlist {...props} />)

    // expect(screen.getAllByText(/Anel Ouro/i)).toHaveLength(7)
    expect(screen.getAllByRole('heading', { name: /favoritos/i })).toHaveLength(
      2
    )
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
  })

  it('should render empty where theres no product in wishlist', () => {
    renderWithTheme(
      <Wishlist recommendedProducts={[]} recommendedHighlight={HighlightMock} />
    )

    expect(screen.queryByText(/Anel Ouro Branco Ouro/i)).not.toBeInTheDocument()
  })
})
