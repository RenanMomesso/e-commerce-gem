import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import ProductCard, { ProductCardProps } from 'components/ProductCard'
import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

export type ProductCardSliderProps = {
  items: ProductCardProps[]
  color?: 'white' | 'black'
}

const settings: SliderSettings = {
  arrows: true,
  slidesToShow: 4.2,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next products" />,
  prevArrow: <ArrowLeft aria-label="previous products" />
}

const ProductCardSlider = ({
  items,
  color = 'black'
}: ProductCardSliderProps) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <ProductCard key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default ProductCardSlider
