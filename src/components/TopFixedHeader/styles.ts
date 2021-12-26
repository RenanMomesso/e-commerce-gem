import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  background-color: lightgray;
  height: 48px;
  text-align: center;
  background-image: url('/img/top_banner.png');
`

export const ItensWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin-left: auto;
    height: 48px;
    margin-right: auto;
    padding-left: calc(${theme.grid.gutter} / 2.2);
    padding-right: calc(${theme.grid.gutter} / 3.5);
    color: white;
    display: flex;
    flex-direction: row;
  `}
`
