import axios from 'axios'
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const changeHomeData = (result) => {
  return {
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writerList: result.writerList,
  }
}

const addArticleList = (list, nextPage) => {
  return {
    type: actionTypes.ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextPage: nextPage,
  }
}

export const getHomeData = () => {
  return (dispatch) => {
    axios.get('http://0.0.0.0:3001/api/home').then(res => {
      const result = res.data.data
      const action = changeHomeData(result)
      dispatch(action)
    })
  }
}

export const getMoreArticleList = (articlePage) => {
  return (dispatch) => {
    axios.get(`http://0.0.0.0:3001/api/articlelist?page=${articlePage}`).then(res => {
      const result = res.data.data
      dispatch(addArticleList(result, articlePage + 1))
    })
  }
}
export const toggleGoTopShow = (show) => {
  return {
    type: actionTypes.TOGGLE_GOTOP_SHOW,
    show: show,
  }
}