import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { LOGIN_MUTATION, SIGNUP_MUTATION } from 'qql/AuthQuery'
import { userLogIn } from '../../services/authHandlers'
import './Login.css'
import {
  Box,
  Button,
  Card,
  Input,
  TextField,
  Typography,
} from '@material-ui/core'
import { CustomInput } from '../../components/forms/elements'

const Login = () => {
  const [values, setValues] = useState({
    isLogin: true,
    login: '',
    password: '',
  })

  const { isLogin, login, password } = values

  const setValue = (field, value) =>
    setValues({
      ...values,
      [field]: value,
    })

  const confirm = async (data) => {
    const { token } = isLogin ? data.login : data.signup
    if (!token) return console.log('Error')
    userLogIn(token)
  }

  const [mutation, { loading, error }] = useMutation(
    isLogin ? LOGIN_MUTATION : SIGNUP_MUTATION,
    {
      onCompleted: (data) => confirm(data),
      onError: (err) => alert(err.message),
    }
  )

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Card
        sx={{
          maxWidth: 300,
          p: 2,
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault()
            mutation({ variables: { login, password } })
          }}
        >
          <Typography variant='h4'>
            {isLogin ? 'Вход' : 'Регистрация'}
          </Typography>
          <div className='d-flex flex-column'>
            <TextField
              value={login}
              onChange={(e) => setValue('login', e.target.value)}
              type='text'
              sx={{ mt: 1 }}
              label='Логин'
            />
            <TextField
              value={password}
              onChange={(e) => setValue('password', e.target.value)}
              type='password'
              label='Пароль'
              sx={{ mt: 1 }}
            />
          </div>
          <div className='d-flex flex-column'>
            <Button sx={{ mt: 1 }} variant='contained' type='submit'>
              {isLogin ? 'Войти' : 'Создать аккаунт'}
            </Button>
            <Button
              sx={{ mt: 1 }}
              variant='outlined'
              color='secondary'
              onClick={(e) => setValue('isLogin', !isLogin)}
            >
              {isLogin
                ? 'Вы еще не зарегестрированы?'
                : 'У вас уже есть аккаунт?'}
            </Button>
          </div>
        </form>
      </Card>
    </Box>
    // <Mutation
    //   mutation={isLogin ? LOGIN_MUTATION : SIGNUP_MUTATION}
    //   variables={{ login, password }}
    //   onCompleted={(data) => confirm(data)}
    //   onError={(err) => console.log({ err: err.message })}
    // >
    //   {(mutation) => (
    //
    //   )}
    // </Mutation>
  )
}
export default Login
