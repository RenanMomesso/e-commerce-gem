import { gql } from '@apollo/client'

export const HighLightFragment = gql`
  fragment HighLightsFragment on ComponentPageHighlight {
    title
    subtitle
    background {
      url
    }
    floatImage {
      url
    }
    buttonLink
    buttonLabel
    alignment
  }
`
