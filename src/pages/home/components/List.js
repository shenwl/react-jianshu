import React, { Component } from 'react'
import { 
  ListWrapper,
  ListItem,
  ListInfo } from '../style'
import { connect } from 'react-redux'


class List extends Component {
  render() {
    const { articleList } = this.props
    return (
      <ListWrapper>
        {
          articleList.map(article => (
            <ListItem key={article.get('id')}>
              <ListInfo>
                <h3 className="article-info-title">{article.get('title')}</h3>
                <p className="article-info-summary">{article.get('summary')}</p>
              </ListInfo>
              <img className="article-pic" src={article.get('imgUrl')} alt=''/>
            </ListItem>
          ))
        }
      </ListWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(List)