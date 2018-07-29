import React, { Component } from 'react'
import { 
  DetailWrapper,
  Header} from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Detail extends Component {
  render() {
    const { id, title, content } = this.props
    console.log(id, title)
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <img alt='' src='' />
        {content}
      </DetailWrapper>
    )
  }
  componentDidMount() {
    this.props.getDetail()
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content']),
    id: state.getIn(['detail', 'id']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDetail() {
      dispatch(actionCreators.getDetailData())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)