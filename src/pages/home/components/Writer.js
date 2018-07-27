import React, { PureComponent } from 'react'
import { 
  WriterWrapper,
  WriterItem,
  WriterHeader,
  WriterInfo } from '../style'
import { connect } from 'react-redux'


class Writer extends PureComponent {
  render() {
    const { writerList } = this.props
    return (
      <WriterWrapper>
        <WriterHeader>
          <span>推荐作者</span>
          <span><i className="iconfont">&#xe626;</i> 换一批</span>
        </WriterHeader>
        {
          writerList.map(item => (
            <WriterItem key={item.get('id')}>
              <WriterInfo>
                <img src={item.get('avatar')} className="writer-avatar" alt=""/>
                <div className="info-text">
                  <p className="writer-name">{item.get('name')}</p>
                  <p className="writer-desc">{item.get('desc')}</p>
                </div>
              </WriterInfo>
              <div className="follow-button"><span className="add">+</span>关注</div>
            </WriterItem>
          ))
        }
      </WriterWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    writerList: state.getIn(['home', 'writerList'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Writer)