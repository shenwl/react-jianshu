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
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import { Link } from 'react-router-dom'
import { LoginLayout } from '../../pages/login/style';


class Header extends Component {
  getListArea() {
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    const jsList = list.toJS()
    const pageList = []

    if(jsList.length) {
      for(let i = page * 10; i < (page + 1) * 10 && i < jsList.length; i ++) {
        pageList.push(
          <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
        )
      }
    }
    if(focused || mouseIn) {
      return (
      <SearchInfo 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch
            onClick={() => {
              handleChangePage(page, totalPage, this.spinIcon)
            }}
          >
            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe626;</i>
            换一批
          </SearchInfoSwitch>
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
    const { focused, handleInputFocus, handleInputBlur, list, loginStatus, logout } = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo/>
        </Link>
        <Nav>
          <NavItem className='left active'>
            <Link to='/'>
              首页
            </Link>
          </NavItem>
          <NavItem className='left'>下载App</NavItem>
          {
            loginStatus ? 
            <NavItem className='right' onClick={logout}>
              退出
            </NavItem> : 
            <NavItem className='right'>
              <Link to='/login'>登录</Link>
            </NavItem>
            
          }
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
                onFocus={() => {handleInputFocus(list)}}
                onBlur={handleInputBlur}
                className={focused ? 'focused' : ''}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe600;</i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            <Link to="/write">
              <i className="iconfont">&#xe601;</i>写文章
            </Link>
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
    loginStatus: state.getIn(['login', 'loginStatus']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getSearchList())
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
    },
    handleChangePage(page, totalPage, spinIcon) {
      let orignAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '')
      if(orignAngle) {
        orignAngle = parseInt(orignAngle, 10)
      }else {
        orignAngle = 0
      }
      spinIcon.style.transform = `rotate(${orignAngle + 360}deg)`
      if(page < totalPage - 1) {
        dispatch(actionCreators.changePage(page + 1))
      }else {
        dispatch(actionCreators.changePage(0))
      }
    },
    logout() {
      dispatch(loginActionCreators.logout())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)