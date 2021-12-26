/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import {
  FavoriteBorder,
  AddShoppingCart,
  Favorite
} from '@styled-icons/material-outlined'
import Button from 'components/Button'
import Ribbon, { RibbonsColors, RibbonSizes } from 'components/Ribbon'

import * as S from './styles'

export type ProductCardProps = {
  title: string | any

  img?: string
  price: string | number
  promotionalPrice?: string | number
  favorite?: boolean
  onFav?: () => void
  ribbon?: string
  ribbonColor?: RibbonsColors
  ribbonSizes?: RibbonSizes
  slug?: string
}

const ProductCard = ({
  slug,
  img,
  price,
  title,
  promotionalPrice,
  favorite = false,
  ribbon,
  ribbonColor,
  ribbonSizes,

  onFav
}: ProductCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} sizes={ribbonSizes}>
        {ribbon}
      </Ribbon>
    )}

    <Link href={`product/${slug}`} passHref>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
    </Link>

    <S.Content>
      <Link href={`product/${slug}`} passHref>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.BuyBox>
            <S.Price>R$ {promotionalPrice || price}</S.Price> ou
            {!!promotionalPrice && <S.Price isPromotional> {price}</S.Price>}
            {/* <Button icon={<AddShoppingCart />} size="small" /> */}
          </S.BuyBox>
          <S.Category>
            12x de R$ {''}
            {Math.floor(Number(price) / 12)
              .toFixed(2)
              .replace('.', ',')}
          </S.Category>
        </S.Info>
      </Link>

      {/* <S.FavButton onClick={onFav} role="button">
        {favorite ? (
          <Favorite aria-label="Remove from wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to Wishlist" />
        )}
      </S.FavButton> */}
    </S.Content>
  </S.Wrapper>
)

export default ProductCard
