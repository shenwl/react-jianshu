import React, { Component } from 'react'
import {  HeaderWrapper,
          Logo, 
          Nav, 
          NavItem, 
          NavSearch, 
          Addition,
          Button,
          SearchWrapper,
          SearchInfo,
          SearchInfoTitle,
          SearchInfoSwitch,
          SearchInfoItem,
          SearchInfoList } from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'


class Header extends Component {
  getListArea() {
    const { focused, list, page, mouseIn, handleMouseEnter, handleMouseLeave } = this.props
    const jsList = list.toJS()
    const pageList = []

    for(let i = page * 10; i < (page + 1) * 10; i ++) {
      pageList.push(
        <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
      )
    }
    if(focused || mouseIn) {
      return (
      <SearchInfo 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch>换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          {pageList}
        </SearchInfoList>
      </SearchInfo>)
    }else {
      return null 
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBlur } = this.props
    return (
      <HeaderWrapper>
        <Logo href='/' />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={200}
              in={focused}
              classNames="slide"
            >
              <NavSearch
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                className={focused ? 'focused' : ''}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe600;</i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            <i className="iconfont">&#xe601;</i>写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.geSearchList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())  
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter()) 
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeaeve())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)