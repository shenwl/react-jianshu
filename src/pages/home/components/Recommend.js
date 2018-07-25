import React, { PureComponent } from 'react'
import {
    RecommendWrapper,
    RecommendItem} from '../style'
import { connect } from 'react-redux'


class Recommend extends PureComponent {
  render() {
    const { recommendList } = this.props
    return (
      <RecommendWrapper>
        {
          recommendList.map(recommend => (
            <RecommendItem key={recommend.get('id')} imgUrl={recommend.get('imgUrl')}/>
          ))
        }
      </RecommendWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recommendList: state.getIn(['home', 'recommendList']),
  }
}

const mapDispatchToProps = (dispatch,) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)