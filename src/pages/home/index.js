import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { 
  HomeWrapper,
  HomeLeft, 
  HomeRight } from './style'
import axios from 'axios'
import { connect } from 'react-redux'
import { actionTypes } from './store'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt='' className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4351/ffe1a5887adb88081cbea7e851ecbc77fa208015.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    )
  }
  componentDidMount() {
    axios.get('http://0.0.0.0:3001/api/home').then(res => {
      const result = res.data.data
      const action = {
        type: actionTypes.CHANGE_HOME_DATA,
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList,
      }
      this.props.dispatchAction(action)
    })
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAction(action) {
      dispatch(action)
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)