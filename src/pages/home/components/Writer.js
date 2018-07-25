import React, { Component } from 'react'
import { WriterWrapper } from '../style'
import { connect } from 'react-redux'


class Writer extends Component {
  render() {
    return (
      <WriterWrapper>
        Writer
      </WriterWrapper>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Writer)