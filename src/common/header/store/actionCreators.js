import * as actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeList = (list, totalPage) => {
  return{
    type: actionTypes.CHANGE_LIST,
    list: fromJS(list),
    totalPage: totalPage,
  }
}

export const searchFocus = () => {
  return {
    type: actionTypes.SEARCH_INPUT_FOCUS,
  }
}

export const searchBlur = () => {
  return {
    type: actionTypes.SEARCH_INPUT_BLUR,
  }
}

export const mouseEnter = () => {
  return {
    type: actionTypes.MOUSE_ENTER,
  }
}

export const mouseLeaeve = () => {
  return {
    type: actionTypes.MOUSE_LEAVE,
  }
}

export const changePage = (page) => {
  return {
    type: actionTypes.CHANGE_PAGE,
    page: page,
  }
}

export const getSearchList = () => {
  return (dispatch) => {
    axios.get('http://0.0.0.0:3001/api/list').then(res => {
      const data = res.data
      const list = data.data
      const total = Math.ceil(list.length / 8)
      const action = changeList(list, total)
      dispatch(action)
    }).catch(e => {
      console.log(e)
    })
  }
}