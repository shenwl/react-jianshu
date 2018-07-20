import React, { Component } from 'react';
import {  HeaderWrapper,
          Logo, 
          Nav, 
          NavItem, 
          NavSearch, 
          Addition,
          Button,
          SearchWrapper } from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'

class Header extends Component {
  constructor(props) {
    super(props)
  }
  render() {
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
                in={this.props.focused}
                classNames="slide"
              >
                <NavSearch
                  onFocus={this.props.handleInputFocus}
                  onBlur={this.props.handleInputBlur}
                  className={this.props.focused ? 'focused' : ''}
                ></NavSearch>
              </CSSTransition>
              <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe600;</i>
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
    focused: state.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = {
        type: 'search_input_focus'
      }
      dispatch(action)
    },
    handleInputBlur() {
      const action = {
        type: 'search_input_blur'
      }
      dispatch(action)  
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)