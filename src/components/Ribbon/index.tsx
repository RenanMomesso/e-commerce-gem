import * as S from './styles'

export type RibbonsColors = 'primary' | 'secondary'
export type RibbonSizes = 'normal' | 'small'

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonsColors
  sizes?: RibbonSizes
}

const Ribbon = ({
  children,
  color = 'primary',
  sizes = 'normal'
}: RibbonProps) => (
  <S.Wrapper color={color} sizes={sizes}>
    {children}
  </S.Wrapper>
)

export default Ribbon
