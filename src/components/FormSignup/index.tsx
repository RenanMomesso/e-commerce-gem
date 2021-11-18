import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import TextField from 'components/Textfield'

import { FormLink, FormWrapper } from 'components/Form'

const FormSignUp = () => (
  <FormWrapper>
    <form>
      <TextField
        name="name"
        placeholder="Name"
        type="name"
        icon={<AccountCircle />}
      />
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
      <TextField
        name="confirmPassword"
        placeholder="ConfirmPassword"
        type="confirmPassword"
        icon={<Lock />}
      />

      <Button size="large" fullWidth>
        Cadastrar
      </Button>

      <FormLink>
        Já possui conta? <a href="#">Entrar</a>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignUp
