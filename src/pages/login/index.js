import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { actionCreators } from './store'
import { 
  LoginLayout,
  LoginBox,
  Input,
  Button } from './style'

class Login extends PureComponent {
  render() {
    const { login, handleLogin } = this.props
    if(login) {
      return (
        <Redirect to="/" />
      )
    }
    return (
      <LoginLayout>
        <LoginBox>
          <Input placeholder="请输入账号" type="text" innerRef={input => { this.accountEl = input }} />
          <Input placeholder="请输入密码" type="password" innerRef={input => { this.passwordEl = input }} />
          <Button onClick={() => { handleLogin(this.accountEl, this.passwordEl) }}>登录</Button>
        </LoginBox>
      </LoginLayout>
    )
  }
}

const mapStateToProps = (state) => ({
  login: state.getIn(['login', 'login']),
})

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin(accountEl, passwordEl) {
      dispatch(actionCreators.login(accountEl.value, passwordEl.value))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)