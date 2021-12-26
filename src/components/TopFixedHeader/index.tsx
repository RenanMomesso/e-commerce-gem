import * as S from './styles'

const TopFixedHeader = () => (
  <S.Wrapper>
    <S.ItensWrapper>
      <div
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            fontSize: 12,
            display: 'inline-block',
            padding: '0.91em 0.9rem 0.767em',
            fontWeight: 500,
            letterSpacing: '.7px',
            textTransform: 'uppercase',
            color: 'inherit',
            textDecoration: 'none'
          }}
        >
          HOME
        </div>
        <div
          style={{
            fontSize: 12,
            display: 'inline-block',
            padding: '0.91em 0.9rem 0.767em',
            fontWeight: 500,
            letterSpacing: '.7px',
            textTransform: 'uppercase',
            color: 'inherit',
            textDecoration: 'none'
          }}
        >
          SOBRE NÓS
        </div>
        <div
          style={{
            fontSize: 12,
            display: 'inline-block',
            padding: '0.91em 0.9rem 0.767em',
            fontWeight: 500,
            letterSpacing: '.7px',
            textTransform: 'uppercase',
            color: 'inherit',
            textDecoration: 'none'
          }}
        >
          MINHA CONTA
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          float: 'right',
          flex: 1
        }}
      >
        <div
          style={{
            fontSize: 12,
            display: 'inline-block',
            padding: '0.91em 0.9rem 0.767em',
            fontWeight: 500,
            letterSpacing: '.7px',
            textTransform: 'uppercase',
            color: 'inherit',
            textDecoration: 'none'
          }}
        >
          R$
        </div>
        <div
          style={{
            fontSize: 12,
            display: 'inline-block',
            padding: '0.91em 0.9rem 0.767em',
            fontWeight: 500,
            letterSpacing: '.7px',
            textTransform: 'uppercase',
            color: 'inherit',
            textDecoration: 'none'
          }}
        >
          ENTRAR
        </div>
        <div
          style={{
            fontSize: 12,
            display: 'inline-block',
            padding: '0.91em 0.9rem 0.767em',
            fontWeight: 500,
            letterSpacing: '.7px',
            textTransform: 'uppercase',
            color: 'inherit',
            textDecoration: 'none'
          }}
        >
          MINHA CONTA
        </div>
      </div>
    </S.ItensWrapper>
  </S.Wrapper>
)

export default TopFixedHeader
