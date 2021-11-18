import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from '.'

const wrapperModifies = {
  normal: () => css`
    width: 4rem;
    height: 4rem;
  `,
  large: () => css`
    width: 7rem;
    height: 5.9rem;
  `,
  hideOnMobile: () => css`
    ${media.lessThan('medium')`
    width: 5.8rem;
    height:4.5rem;

    svg {
      height: 4.5rem;
      pointer-events:none;
    }

    .text {
      display:none;
    }

  `}
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size, hideOnMobile }) => css`
    color: ${theme.colors[color!]};
    ${!!size && wrapperModifies[size]}
    ${!!hideOnMobile && wrapperModifies.hideOnMobile}
  `}
`
