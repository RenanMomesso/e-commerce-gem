import { Container } from 'components/Container'
import * as HeadingStyles from 'components/Heading/styles'
import * as ProductCardSlides from 'components/ProductCardSlider/styles'
import * as HighlightsStyles from 'components/Highlights/styles'

import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    ${HighlightsStyles.Wrapper},
    ${ProductCardSlides.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${HighlightsStyles.Wrapper} {
      ${media.lessThan('medium')`
        margin-right: calc(-${theme.grid.gutter} /2);
        margin-left: calc(-${theme.grid.gutter} /2);
      `}
    }

    ${ProductCardSlides.Wrapper} {
      ${media.lessThan('huge')`
      margin-right: calc(-${theme.grid.gutter} /2);
      `}
    }

    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`
