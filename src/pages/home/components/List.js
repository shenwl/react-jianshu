import React, { PureComponent } from 'react'
import { 
  ListWrapper,
  ListItem,
  ListInfo,
  LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'

class List extends PureComponent {
  render() {
    const { articleList, getMoreArticleList, articlePage } = this.props
    return (
      <ListWrapper>
        {
          articleList.map(article => (
            <Link to={'/detail/' + article.get('id')} key={article.get('id')}>
              <ListItem >
                <ListInfo>
                  <h3 className="article-info-title">{article.get('title')}</h3>
                  <p className="article-info-summary">{article.get('summary')}</p>
                </ListInfo>
                <img className="article-pic" src={article.get('imgUrl')} alt=''/>
              </ListItem>
            </Link>
          ))
        }
        <LoadMore onClick={() => getMoreArticleList(articlePage)}>阅读更多</LoadMore>
      </ListWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList']),
    articlePage: state.getIn(['home', 'articlePage']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreArticleList(articlePage) {
      dispatch(actionCreators.getMoreArticleList(articlePage))
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(List)