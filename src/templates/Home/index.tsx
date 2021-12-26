import { Container } from 'components/Container'
import { useEffect } from 'react'

import * as S from './styles'
import { BannerProps } from 'components/Banner'
import { ProductCardProps } from 'components/ProductCard'
import { HighlightProps } from 'components/Highlights'
import BannerSlider from 'components/BannerSlider'
import ShowCase from 'components/ShowCase'
import Base from 'templates/Base'
import BenefitsShop from 'components/BenefitsShop'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newsProducts: ProductCardProps[]
  mostPopularHighlights: HighlightProps
  mostPopularProducts: ProductCardProps[]
  upcomingProducts: ProductCardProps[]
  upcomingHighlights: HighlightProps
  upcomingMoreProducts: ProductCardProps[]
  freeProducts: ProductCardProps[]
  freeHighlight: HighlightProps
  newsProductsTitle: string
  mostPopularProductsTitle: string
  upcomingProductsTitle: string
  wishedProductsTitle: string
}

const Home = ({
  banners,
  mostPopularHighlights,
  mostPopularProducts,
  newsProducts,
  freeHighlight,
  freeProducts,
  mostPopularProductsTitle,
  newsProductsTitle,
  upcomingHighlights,
  upcomingMoreProducts,
  upcomingProducts,
  upcomingProductsTitle,
  wishedProductsTitle
}: HomeTemplateProps) => {
  return (
    <Base>
      {/* <BannerSlider items={banners} /> */}
      <div>
        <S.Image />
      </div>
      {/* <Container>
        <S.SectionBanner>
        <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container> */}

      <Container
        style={{ marginTop: 50, border: '1px solid black', height: 200 }}
      >
        <BenefitsShop />
      </Container>
      <S.SectionNews>
        <ShowCase
          title={newsProductsTitle}
          products={newsProducts}
          color="black"
          midle={true}
          size="medium"
        />
      </S.SectionNews>

      <ShowCase
        title={mostPopularProductsTitle}
        products={mostPopularProducts}
        highlight={mostPopularHighlights}
        color="black"
        midle
      />
      <ShowCase products={newsProducts} />

      <ShowCase
        title={upcomingProductsTitle}
        products={mostPopularProducts}
        highlight={mostPopularHighlights}
        color="black"
      />

      <ShowCase
        title={wishedProductsTitle}
        products={mostPopularProducts}
        // highlight={mostPopularHighlights}
        midle
        color="black"
      />
    </Base>
  )
}
export default Home
