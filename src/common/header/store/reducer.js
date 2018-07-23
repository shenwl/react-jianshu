import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'


const defaultState = fromJS({
  focused: false,
  list: [],
})

export default (state = defaultState, action) => {
  if(action.type === actionTypes.SEARCH_INPUT_FOCUS) {
    return state.set('focused', true)
  }
  if(action.type === actionTypes.SEARCH_INPUT_BLUR) {
    return state.set('focused', false)
  }
  if(action.type === actionTypes.CHANGE_LIST) {
    return state.set('list', action.list)
  }
  return state
}