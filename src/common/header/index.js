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

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false
    }
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
  }
  handleInputFocus() {
    this.setState(() => {
      return {
        focused: true
      }
    })
  }
  handleInputBlur() {
    this.setState(() => {
      return {
        focused: false
      }
    })   
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
                in={this.state.focused}
                classNames="slide"
              >
                <NavSearch
                  onFocus={this.handleInputFocus}
                  onBlur={this.handleInputBlur}
                  className={this.state.focused ? 'focused' : ''}
                ></NavSearch>
              </CSSTransition>
              <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe600;</i>
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

export default Header;