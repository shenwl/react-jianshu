import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import { actionCreators } from './store'

class Login extends PureComponent {
  render() {
    const { id, title, content } = this.props
    return (
      <div>Login</div>
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