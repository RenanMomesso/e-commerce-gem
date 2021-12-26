import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/Textfield'
import * as S from './styles'

const FormProfile = () => (
  <S.Wrapper>
    <Heading lineBottom color="black" size="small">
      My Profile
    </Heading>

    <S.Form>
      <TextField
        name="name"
        placeholder="Name"
        label="name"
        initialValue="Renan Momesso"
      />
      <TextField
        name="email"
        placeholder="E-mail"
        label="E-mail"
        initialValue="renan_momesso@hotmail.com"
        disabled
      />

      <TextField
        name="password"
        type={'password'}
        placeholder="Type your password"
        label="Password"
      />
      <TextField
        name="new_password"
        type={'password'}
        placeholder="Type new password"
        label="New Password"
      />

      <Button size="large">Save</Button>
    </S.Form>
  </S.Wrapper>
)

export default FormProfile
