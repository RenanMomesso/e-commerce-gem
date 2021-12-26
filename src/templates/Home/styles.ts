import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'
import * as HighlightsStyles from 'components/Highlights/styles'
import * as ProductCardSlides from 'components/ProductCardSlider/styles'

export const Wrapper = styled.main``

const Sections = styled.section`
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

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin-top: 20px;
    margin: ${theme.spacings.large} calc(-${theme.grid.gutter} / 2);

    ${media.greaterThan('medium')`
    margin: ${theme.spacings.large} 0;
    position: relative;
    z-index: ${theme.layers.base};
    `}
  `}
`

export const SectionNews = styled(Sections)`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);

    ${media.greaterThan('large')`
    `}

    ${media.greaterThan('medium')`
    margin-bottom: 0;
    padding-top: 14rem;
    padding-bottom: 10rem;
    background-color: #f2f2f2;
    /* clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%); */

    ${HeadingStyles.Wrapper}{
      color:${theme.colors.black};
    }
    `}
  `}
`

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-top: calc(${theme.spacings.large} * 3);
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.white};
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);

    ${media.greaterThan('medium')`
    padding-top:calc(${theme.spacings.xxlarge} * 2);
    clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
    `}
  `}
`
export const Image = styled.div<{ src?: any }>`
  ${({ theme, src }) => css`
    width: 100%;
    height: 23rem;
    background-color: ${theme.colors.lightGray};
    background-color: #eaeaea;
    background-image: url(https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/934a2b88873337.5de56582a78a5.png);
    background-position: center center;
    background-size: cover;

    ${media.greaterThan('medium')`
    height: 58rem;
    `}
  `}
`
