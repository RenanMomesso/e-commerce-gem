import { Email, Lock } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import TextField from 'components/Textfield'

import { FormLink, FormWrapper, ForgotPassword } from 'components/Form'

const FormSignin = () => (
  <FormWrapper>
    <form>
      <TextField
        name="email"
        placeholder="email"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
      <ForgotPassword href="#">Esqueci minha senha</ForgotPassword>

      <Button size="large" fullWidth>
        Entrar
      </Button>

      <FormLink>
        Não tem conta ainda? <a href="#">Cadastre-se</a>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignin
