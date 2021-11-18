import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import productsMock from 'components/ProductCardSlider/mock'
import highlightMocks from 'components/Highlights/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getStaticProps() {
  return {
    props: {
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
  }
}
