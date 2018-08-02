import axios from 'axios'
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const changeLogin = () => ({
  type: actionTypes.CHANGE_LOGIN,
  value: true,
})

export const login = (account, password) => {
  return (dispatch) => {
    axios.get('http://0.0.0.0:3001/api/login', {account, password}).then(res => {
      const data = res.data
      if(data.result === 1) {
        dispatch(changeLogin())
      }
    })
  }
}