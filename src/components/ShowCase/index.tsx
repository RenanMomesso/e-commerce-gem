import Heading from 'components/Heading'
import Highlights, { HighlightProps } from 'components/Highlights'
import { ProductCardProps } from 'components/ProductCard'
import ProductCardSlider from 'components/ProductCardSlider'
import * as S from './styles'

export type ShowCaseProps = {
  title?: string
  highlight?: HighlightProps
  products?: ProductCardProps[]
  color?: 'black' | 'white'
  midle?: boolean
  size?: 'small' | 'medium' | 'huge'
}
const ShowCase = ({
  highlight,
  products,
  title,
  color = 'white',
  midle = false,
  size = 'medium'
}: ShowCaseProps) => {
  return (
    <S.Wrapper>
      {!!title && (
        <Heading
          size={size}
          lineLeft
          middle={midle}
          lineColor="secondary"
          color={color}
        >
          {title}
        </Heading>
      )}

      {!!highlight && <Highlights {...highlight} />}
      {!!products && <ProductCardSlider items={products} />}
    </S.Wrapper>
  )
}

export default ShowCase
