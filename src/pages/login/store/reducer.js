import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'


const defaultState = fromJS({
  login: false,
})


export default (state = defaultState, action) => {
  switch(action.type) {
    // case actionTypes.CHANGE_HOME_DATA:
    //   return changeHomeData(state, action)
    default:
      return state
  }
}