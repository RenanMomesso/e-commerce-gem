import Button from 'components/Button'
import * as S from './styles'
import Link from 'next/link'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

const Empty = ({ description, title, hasLink }: EmptyProps) => (
  <S.Wrapper aria-label="firstdiv">
    <S.Image
      src="/img/empty.png"
      alt="Imagem mostrando uma mulher com um ponto de interrogação perto para mostra que está faltando algo, apoiado a um balcão faltando produtos"
      role="image"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    {hasLink && (
      <Link href="/" passHref>
        <Button as="a"> Voltar</Button>
      </Link>
    )}
  </S.Wrapper>
)

export default Empty
