import axios from 'axios'
import * as actionTypes from './actionTypes'

const changeLogin = (value) => ({
  type: actionTypes.CHANGE_LOGIN,
  value: value, // true or false
})

export const logout = () => {
  return (dispatch) => {
    dispatch(changeLogin(false))
  }
}

export const login = (account, password) => {
  return (dispatch) => {
    axios.get('http://0.0.0.0:3001/api/login', {account, password}).then(res => {
      const data = res.data
      if(data.result === 1) {
        dispatch(changeLogin(true))
      }
    })
  }
}


