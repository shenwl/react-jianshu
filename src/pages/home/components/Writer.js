import React, { PureComponent } from 'react'
import { 
  WriterWrapper,
  WriterItem,
  WriterHeader } from '../style'
import { connect } from 'react-redux'


class Writer extends PureComponent {
  render() {
    return (
      <WriterWrapper>
        <WriterHeader>
          <span>推荐作者</span>
          <span><i className="iconfont">&#xe626;</i> 换一批</span>
        </WriterHeader>
        <WriterItem></WriterItem>
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