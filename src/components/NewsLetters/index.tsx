import * as S from './styles'

const NewsLetters = () => (
  <S.Wrapper>
    <S.MiddleDiv>
      <S.TextLeftDiv>
        <S.TextTop>JUNTE-SE EM NOSSA NEWSLETTER</S.TextTop>
        <S.TextBot>Receba desconto de 5% em cada compras</S.TextBot>
      </S.TextLeftDiv>

      <S.RightDiv>
        <S.InputName placeholder="Seu nome" />
        <S.InputEmail placeholder="Seu email" />
        <S.ButtonNewsLetter>ACEITAR</S.ButtonNewsLetter>
      </S.RightDiv>
    </S.MiddleDiv>
  </S.Wrapper>
)

export default NewsLetters
