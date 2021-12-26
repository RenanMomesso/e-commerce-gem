import styled from 'styled-components'
import * as ProductStyles from 'components/ProductItem/styles'

export const Wrapper = styled.main`
  ${ProductStyles.Wrapper} {
    &:last-child {
      border-bottom: 0;
    }
  }
`
