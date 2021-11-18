import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import Button from 'components/Button'

import {
  AddShoppingCart,
  FavoriteBorder
} from '@styled-icons/material-outlined'

import * as S from './styles'

export type ProductInfoProps = {
  title: string
  description: string
  price: number
}

const ProductInfo = ({ description, price, title }: ProductInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom lineColor="primary">
      {title}
    </Heading>

    <Ribbon color="secondary">{`$${price}`}</Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <Button icon={<AddShoppingCart />} size="large">
        Comprar
      </Button>
      <Button icon={<FavoriteBorder />} size="large" minimal>
        Favoritos
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default ProductInfo
