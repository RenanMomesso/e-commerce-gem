import * as S from './styles'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  lineColor?: LineColors
  size?: 'small' | 'medium' | 'huge'
  middle?: boolean
}

const Heading = ({
  children,
  color = 'black',
  lineLeft = false,
  lineBottom = false,
  lineColor = 'secondary',
  size = 'medium',
  middle = false
}: HeadingProps) => {
  if (middle)
    return (
      <div
        style={{
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 20
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 30
          }}
        >
          <S.HorizontalLeft />
        </div>
        <h1
          style={{
            fontSize: 26,
            letterSpacing: '1px',
            fontWeight: 'normal',
            textTransform: 'uppercase'
          }}
        >
          {children}
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 30
          }}
        >
          <S.HorizontalLeft />
        </div>
      </div>
    )
  return (
    <S.Wrapper
      color={color}
      lineLeft={lineLeft}
      lineBottom={lineBottom}
      size={size}
      lineColor={lineColor}
    >
      {children}
    </S.Wrapper>
  )
}

export default Heading
