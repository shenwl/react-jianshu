import axios from 'axios'
import * as actionTypes from './actionTypes'

const changeHomeData = (result) => {
  return {
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
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