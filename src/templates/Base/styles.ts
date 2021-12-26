import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`

export const Content = styled.div`
  flex: 1 0 auto;
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
    /* https://cdnb.artstation.com/p/assets/images/images/014/987/949/large/sangeeta-bisht-banner-3.jpg?1546606296 */
    background-position: center center;
    background-size: cover;

    ${media.greaterThan('medium')`
    height: 58rem;
    `}
  `}
`
