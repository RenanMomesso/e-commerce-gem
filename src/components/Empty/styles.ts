import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const Image = styled.img`
  max-width: 100%;

  ${media.greaterThan('medium')`
    max-width:70rem;
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xxlarge};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.light};
  `}
`
