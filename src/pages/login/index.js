import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import { actionCreators } from './store'
import { 
  LoginLayout,
  LoginBox } from './style'

class Login extends PureComponent {
  render() {
    const { id, title, content } = this.props
    return (
      <LoginLayout>
        <LoginBox>
          Login
        </LoginBox>
      </LoginLayout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)