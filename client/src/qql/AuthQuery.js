import { gql } from '@apollo/client'

export const SIGNUP_MUTATION = gql`
  mutation SignupMutation($login: String!, $password: String!) {
    signup(login: $login, password: $password) {
      token
      message
    }
  }
`

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($login: String!, $password: String!) {
    login(login: $login, password: $password) {
      token
      message
    }
  }
`
