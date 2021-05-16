import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { userLogIn } from "../../services/authHandlers";
import "./Login.css";

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($login: String!, $password: String!) {
    signup(login: $login, password: $password) {
      token
      message
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation LoginMutation($login: String!, $password: String!) {
    login(login: $login, password: $password) {
      token
      message
    }
  }
`;

class Login extends Component {
  state = {
    isLogin: true,
    login: "",
    password: "",
  };

  confirm = async (data) => {
    const { token } = this.state.isLogin ? data.login : data.signup;
    if (!token) return console.log("Error");
    userLogIn(token);
  };

  render() {
    const { isLogin, login, password } = this.state;
    return (
      <Mutation
        mutation={isLogin ? LOGIN_MUTATION : SIGNUP_MUTATION}
        variables={{ login, password }}
        onCompleted={(data) => this.confirm(data)}
        onError={(err) => console.log(err)}
      >
        {(mutation) => (
          <div className="wrapper">
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                mutation();
              }}
            >
              <h4>{isLogin ? "Вход" : "Регистрация"}</h4>
              <div className="d-flex flex-column">
                <input
                  value={login}
                  onChange={(e) => this.setState({ login: e.target.value })}
                  type="text"
                  placeholder="login"
                  className="mt-2"
                />
                <input
                  value={password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                  type="password"
                  placeholder="password"
                  className="mt-2"
                />
              </div>
              <div className="d-flex flex-column">
                <Button className="mt-2" size="md" variant="dark" type="submit">
                  {isLogin ? "Войти" : "Создать аккаунт"}
                </Button>
                <Button
                  className="mt-2"
                  size="sm"
                  variant="outline-dark"
                  onClick={() => this.setState({ isLogin: !isLogin })}
                >
                  {isLogin
                    ? "Вы еще не зарегестрированы?"
                    : "У вас уже есть аккаунт?"}
                </Button>
              </div>
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}
export default Login;
