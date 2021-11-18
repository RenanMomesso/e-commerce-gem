import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

export type Platform = 'windows' | 'linux' | 'mac'

export type ProductDetailsProps = {
  categoria: string
  platforms: Platform[]
  releaseDate: string
}

const ProductDetails = ({
  categoria,
  releaseDate,
  platforms
}: ProductDetailsProps) => {
  // const platFormsName = {
  //   linux: 'linux',
  //   mac: 'mac',
  //   windows: 'windows'
  // }

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          Product Details {releaseDate && releaseDate}
          Product Details {platforms && platforms}
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Label>Categoria</S.Label>
          <S.Description>{categoria}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Release Date</S.Label>
          <S.Description>
            {/* {new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(releaseDate))} */}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Plataformas</S.Label>
        </S.Block>

        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>publisher</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Peso</S.Label>
          <S.Description>Rating</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default ProductDetails
