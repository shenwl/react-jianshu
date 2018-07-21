import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'


const defaultState = fromJS({
  focused: false
})

export default (state = defaultState, action) => {
  if(action.type === actionTypes.SEARCH_INPUT_FOCUS) {
    return state.set('focused', true)
  }
  if(action.type === actionTypes.SEARCH_INPUT_BLUR) {
    // const newState = JSON.parse(JSON.stringify(state))
    // newState.focused = false
    return state.set('focused', false)
  }
  return state
}