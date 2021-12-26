import { Container } from 'components/Container'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type CoverProps = {
  src: string
}

export const BrandCrumbWrapper = styled.div`
  position: relative;
  text-align: center;
  font-size: 12.36px;
  height: 20vh;
  min-height: 150px;
  background-color: #f8f9fa;
  background: url(https://mldrbgfat3wx.i.optimole.com/SQPHnU0-iV12xpbv/w:2543/h:304/q:auto/https://dici.themes.zone/main/wp-content/uploads/sites/8/2019/04/ribbon.jpg)
    center center no-repeat;
  background-size: cover;
  margin-bottom: 3rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #000;
`

export const BrandCrumbText = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-left: calc(${theme.grid.gutter} / 2.9);
    padding-right: calc(${theme.grid.gutter} / 2);
    max-width: 1200px;
    margin: auto;
  `}
`

export const Main = styled.main`
  margin-top: 20rem;
  border: 1px solid black;
  ${media.greaterThan('medium')`
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
