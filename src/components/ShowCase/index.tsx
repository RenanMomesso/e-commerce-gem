import Heading from 'components/Heading'
import Highlights, { HighlightProps } from 'components/Highlights'
import { ProductCardProps } from 'components/ProductCard'
import ProductCardSlider from 'components/ProductCardSlider'
import * as S from './styles'

export type ShowCaseProps = {
  title?: string
  highlight?: HighlightProps
  products?: ProductCardProps[]
}
const ShowCase = ({ highlight, products, title }: ShowCaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}

    {!!highlight && <Highlights {...highlight} />}
    {!!products && <ProductCardSlider items={products} />}
  </S.Wrapper>
)

export default ShowCase
