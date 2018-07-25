import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { 
  HomeWrapper,
  HomeLeft, 
  HomeRight,
  GoTop } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Home extends Component {
  handleScrollTop() {
    window.scrollTo(0, 0)
  }
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
        { 
          this.props.showGoTop ? <GoTop onClick={this.handleScrollTop}>^</GoTop> : ''
        }
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeGoTopShow)
  }
}

const mapStateToProps = (state) => {
  return {
    showGoTop: state.getIn(['home', 'showGoTop']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeData() {
      const action = actionCreators.getHomeData()
      dispatch(action)
    },
    changeGoTopShow(e) {
      if(document.documentElement.scrollTop > 400) {
        dispatch(actionCreators.toggleGoTopShow(true))
      }else {
        dispatch(actionCreators.toggleGoTopShow(false))
      }
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)