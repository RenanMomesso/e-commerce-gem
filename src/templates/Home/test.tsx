import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helper'
import bannersMock from 'components/BannerSlider/mock'
import productsMock from 'components/ProductCardSlider/mock'
import highlightMocks from 'components/Highlights/mock'
import 'match-media-mock'

import Home from '.'

const props = {
  banners: bannersMock,
  newsProducts: productsMock,
  mostPopularHighlights: highlightMocks,
  mostPopularProducts: productsMock,
  upcomingProducts: productsMock,
  upcomingHighlights: highlightMocks,
  upcomingMoreProducts: productsMock,
  freeProducts: productsMock,
  freeHighlight: highlightMocks
}

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu"></div>
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer"></div>
    }
  }
})

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu"></div>
    }
  }
})

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

// const functionDoMock = (component: string) => {
//   return jest.mock(`components/${component}`, () => {
//     return {
//       __esModule: true,
//       default: function Mock() {
//         return <div data-testid={`Mock ${component}`}></div>
//       }
//     }
//   })
// }

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock BannerSlider"></div>
    }
  }
})
describe('<Home />', () => {
  it('should render banner and showcases', () => {
    renderWithTheme(<Home {...props} />)
    expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(5)
  })
})
