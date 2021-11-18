import { screen } from '@testing-library/react'
import productMockInfo from 'components/ProductInfo/mock'
import galleryMock from 'components/Gallery/mock'
import productDetailsMock from 'components/ProductDetails/mock'
import HighlightMock from 'components/Highlights/mock'
import productCardMock from 'components/ProductCardSlider/mock'

import { renderWithTheme } from 'utils/helper'

import Product, { ProductTemplateProps } from '.'

const props: ProductTemplateProps = {
  productInfo: productMockInfo,
  gallery: galleryMock,
  description: {
    content: '<h1>testando description</h1>'
  },
  details: productDetailsMock,
  upcomingProducts: productCardMock,
  upcomingHighlight: HighlightMock,
  RecommendedProducts: productCardMock
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/Menu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Menu" />
  }
}))

jest.mock('components/Gallery', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Gallery" />
  }
}))

jest.mock('components/ProductDetails', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ProductDetails" />
  }
}))

jest.mock('components/ProductInfo', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ProductInfo" />
  }
}))

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

describe('<Product />', () => {
  it('should render template Product with all components', () => {
    renderWithTheme(<Product {...props} />)

    expect(screen.getByTestId('Mock Gallery')).toBeInTheDocument()
    expect(screen.getByTestId('Mock ProductDetails')).toBeInTheDocument()
    expect(screen.getByTestId('Mock ProductInfo')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(2)
    expect(screen.getByText(/testando description/i)).toBeInTheDocument()
  })

  it('should not render gallery if there no image', () => {
    renderWithTheme(<Product {...props} gallery={undefined} />)

    expect(screen.queryByTestId('Mock Gallery')).not.toBeInTheDocument()
  })

  it('should  render gallery if its on mobile', () => {
    renderWithTheme(<Product {...props} />)

    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyle({
      display: 'block'
    })

    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyleRule(
      'display',
      'block',
      { media: '(min-width: 768px)' }
    )
  })

  // it('should render the cover image', () => {
  //   renderWithTheme(<Product {...props} />)

  //   const cover = screen.getByRole('img', {
  //     name: /Borderlands 3/i
  //   }).parentElement

  //   expect(cover).toHaveStyleRule('height', '70rem', {
  //     media: '(min-width: 768px)'
  //   })

  //   expect(cover).toHaveStyleRule(
  //     'clip-path',
  //     'polygon(0 0,100% 0,100% 100%,0 85%)',
  //     {
  //       media: '(min-width: 768px)'
  //     }
  //   )
  // })
})
