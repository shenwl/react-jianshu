import React, { Component } from 'react'
import {
    RecommendWrapper,
    RecommendItem} from '../style'
import { connect } from 'react-redux'


class Recommend extends Component {
  render() {
    const { recommendList } = this.props
    return (
      <RecommendWrapper>
        {
          recommendList.map(recommend => (
            <RecommendItem key={recommend.get('id')}>
              <img className="recommend-pic" src={recommend.get('imgUrl')} alt=""/>
            </RecommendItem>
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