import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import MenuOficial from 'components/MenuOficial'
import NewsLetters from 'components/NewsLetters'
import TopFixedHeader from 'components/TopFixedHeader'
import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base: React.FC<BaseTemplateProps> = ({ children }) => (
  <S.Wrapper>
    <TopFixedHeader />
    <MenuOficial />

    {children}

    <S.SectionFooter>
      <NewsLetters />
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </S.Wrapper>
)

export default Base
