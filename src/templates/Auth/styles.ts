import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as LogoStyles from 'components/Logo/styles'
import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;

  ${media.greaterThan('medium')`
  grid-template-columns: 1fr 1fr;

  `}
  height: 100vh;
`

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-image: url('https://i0.wp.com/blog.volpijoias.com.br/wp-content/uploads/2019/03/como-usar-joias-no-dia-a-dia-descubra-como-combinar.jpg?fit=2121%2C1414&ssl=1');
    background-size: cover;
    background-position: center center;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};

    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${theme.colors.black};
      opacity: 0.85;
    }

    ${media.lessThan('medium')`
    display:none;
    `}
  `}
`

export const BannerContent = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    height: 100%;
    color: ${theme.colors.white};
    position: relative;
    z-index: ${theme.layers.base};

    a {
      width: fit-content;
      height: fit-content;
    }
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};
    margin-top: ${theme.spacings.xxsmall};

    strong {
      color: ${theme.colors.primary};
    }
  `}
`

export const Footer = styled.p`
  align-self: end;
`

export const Content = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: grid;
    align-items: center;
    justify-content: center;
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 30rem;

    ${LogoStyles.Wrapper} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`
