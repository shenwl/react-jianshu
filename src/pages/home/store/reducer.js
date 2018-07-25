import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'


const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return state.merge({
        topicList: action.topicList,
        articleList: action.articleList,
        recommendList: action.recommendList,
      })
    default:
      return state
  }
}