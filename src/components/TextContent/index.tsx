import Heading from 'components/Heading'

import * as S from './styles'

export type TextContentProps = {
  title?: string
  content: string
}

const TextContent = ({ content, title = 'Descrição' }: TextContentProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="primary">
        {title}
      </Heading>
    )}
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </S.Wrapper>
)

export default TextContent
