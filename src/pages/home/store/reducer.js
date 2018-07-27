import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'


const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  articlePage: 1,
  showGoTop: false,
})

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList),
    writerList: fromJS(action.writerList),
  })
}

const addArticleList = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(action.list),
    articlePage: action.nextPage,
  })
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    case actionTypes.ADD_ARTICLE_LIST:
      return addArticleList(state, action)
    case actionTypes.TOGGLE_GOTOP_SHOW:
      return state.set('showGoTop', action.show)
    default:
      return state
  }
}