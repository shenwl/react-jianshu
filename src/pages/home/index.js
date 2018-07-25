import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { 
  HomeWrapper,
  HomeLeft, 
  HomeRight } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

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
    this.props.changeHomeData()
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeData() {
      const action = actionCreators.getHomeData()
      dispatch(action)
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)