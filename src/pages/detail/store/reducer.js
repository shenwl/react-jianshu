import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'


const defaultState = fromJS({
  title: '玩转职场，你还差一个项目管理思维',
  imgUrl: '//upload-images.jianshu.io/upload_images/3052965-f8cfc95f95487cc0.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/700',
  content: ''

})


export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    default:
      return state
  }
}