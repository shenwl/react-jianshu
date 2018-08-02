import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import { actionCreators } from './store'
import { 
  LoginLayout,
  LoginBox,
  Input,
  Button } from './style'

class Login extends PureComponent {
  render() {
    const { id, title, content } = this.props
    return (
      <LoginLayout>
        <LoginBox>
          <Input placeholder="请输入账号" type="text" />
          <Input placeholder="请输入密码" type="password" />
          <Button>登录</Button>
        </LoginBox>
      </LoginLayout>
    )
  }
}

const mapStateToProps = null

const mapDispatchToProps = (dispatch) => {
  return {
    login() {

    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)