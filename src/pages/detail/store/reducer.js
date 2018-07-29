import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  id: '',
  title: '',
  content: '',
})

const changeHomeData = (state, action) => {
  return state.merge({
    id: action.id,
    title: action.title,
    content: action.content,
  })
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_DETAIL_DATA:
      return changeHomeData(state, action)
    default:
      return state
  }
}