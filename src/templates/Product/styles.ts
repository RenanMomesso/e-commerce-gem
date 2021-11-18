import { Container } from 'components/Container'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type CoverProps = {
  src: string
}

export const Main = styled.main`
  margin-top: 20rem;
  ${media.greaterThan('medium')`
    margin-top:58rem;
`}
`

export const Cover = styled.div<CoverProps>``

const Section = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxlarge};

    ${media.greaterThan('medium')`
    margin-bottom: calc(${theme.spacings.xlarge} * 2);
    `}
  `}
`

export const ProductInfo = styled(Section)``
export const ProductGallery = styled(Section)`
  display: block;
  ${media.greaterThan('medium')`
      display:block;
    `}
`

export const SectionDescription = styled(Section)``
export const SectionProductDetails = styled(Section)``
