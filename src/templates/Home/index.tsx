import { Container } from 'components/Container'

import * as S from './styles'
import { BannerProps } from 'components/Banner'
import { ProductCardProps } from 'components/ProductCard'
import { HighlightProps } from 'components/Highlights'
import BannerSlider from 'components/BannerSlider'
import ShowCase from 'components/ShowCase'
import Base from 'templates/Base'

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
}

const Home = ({
  banners,
  mostPopularHighlights,
  mostPopularProducts,
  newsProducts
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <ShowCase title=" Jóias recém chegadas" products={newsProducts} />
    </S.SectionNews>

    <ShowCase
      title="Mais Populares"
      products={mostPopularProducts}
      highlight={mostPopularHighlights}
    />
    <ShowCase products={newsProducts} />

    <S.SectionUpcoming>
      <ShowCase
        title="Lançamentos"
        products={mostPopularProducts}
        highlight={mostPopularHighlights}
      />
    </S.SectionUpcoming>

    <S.SectionFreeGames>
      <ShowCase
        title="Descontos especiais"
        products={mostPopularProducts}
        highlight={mostPopularHighlights}
      />
    </S.SectionFreeGames>
  </Base>
)

export default Home
