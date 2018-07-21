import * as actionTypes from './actionTypes'

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