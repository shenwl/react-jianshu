import React, { PureComponent } from 'react'
import { 
  DetailWrapper,
  Header} from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Detail extends PureComponent {
  render() {
    const { id, title, content } = this.props
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <img alt='' src='' />
        {content}
      </DetailWrapper>
    )
  }
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
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
    getDetail(id) {
      dispatch(actionCreators.getDetailData(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)