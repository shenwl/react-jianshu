import * as actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeList = (list) => {
  return{
    type: actionTypes.CHANGE_LIST,
    list: fromJS(list),
  }
}

export const searchFocus = () => {
  return {
    type: actionTypes.SEARCH_INPUT_FOCUS
  }
}

export const searchBlur = () => {
  return {
    type: actionTypes.SEARCH_INPUT_BLUR
  }
}

export const geSearchList = () => {
  return (dispatch) => {
    axios.get('http://0.0.0.0:3001/api/list').then(res => {
      const data = res.data
      const action = changeList(data.data)
      dispatch(action)
    }).catch(e => {
      console.log(e)
    })
  }
}