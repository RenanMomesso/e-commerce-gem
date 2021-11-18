import Button from 'components/Button'
import Ribbon, { RibbonsColors, RibbonSizes } from 'components/Ribbon'
import React from 'react'
import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  ribbon?: React.ReactNode
  ribbonColor?: RibbonsColors
  ribbonSizes?: RibbonSizes
}

const Banner = ({
  buttonLabel,
  buttonLink,
  img,
  subtitle,
  title,
  ribbon,
  ribbonColor = 'primary',
  ribbonSizes = 'normal'
}: BannerProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} sizes={ribbonSizes}>
        {ribbon}
      </Ribbon>
    )}
    <S.Image src={img} role="img" aria-label={title} />
    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
)

export default Banner
