import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'


const defaultState = fromJS({
  focused: false,
  list: [],
  page: 0,
  totalPage: 0,
  mouseIn: false,
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.SEARCH_INPUT_FOCUS:
      return state.set('focused', true)
    case actionTypes.SEARCH_INPUT_BLUR:
      return state.set('focused', false)
    case actionTypes.CHANGE_LIST:
      return state.set('list', action.list).set('totalPage', action.totalPage)
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }
}