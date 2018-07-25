import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'


const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl: '//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
      id: 2,
      title: '@IT·互联网',
      imgUrl: '//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
  ],
  articleList: [
    {
      id: 1,
      title: '玩转职场，你还差一个项目管理思维',
      summary: 'PMI（美国项目管理协会）发布的第10次薪酬调查报告显示，PMP（项目管理专业人士）证书是影响项目管理专业人士薪酬位数的重要原因。持有PMP证书...',
      imgUrl: '//upload-images.jianshu.io/upload_images/3052965-f8cfc95f95487cc0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
    },
    {
      id: 2,
      title: '玩转职场，你还差一个项目管理思维',
      summary: 'PMI（美国项目管理协会）发布的第10次薪酬调查报告显示，PMP（项目管理专业人士）证书是影响项目管理专业人士薪酬位数的重要原因。持有PMP证书...',
      imgUrl: '//upload-images.jianshu.io/upload_images/3052965-f8cfc95f95487cc0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
    },
    {
      id: 3,
      title: '玩转职场，你还差一个项目管理思维',
      summary: 'PMI（美国项目管理协会）发布的第10次薪酬调查报告显示，PMP（项目管理专业人士）证书是影响项目管理专业人士薪酬位数的重要原因。持有PMP证书...',
      imgUrl: '//upload-images.jianshu.io/upload_images/3052965-f8cfc95f95487cc0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
    },
  ],
  recommendList: [
    {
      id: 1,
      title: '七日热门',
      imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png',
    },
    {
      id: 2,
      title: '30日热门',
      imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png',
    },
    {
      id: 3,
      title: '优先连载',
      imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },
    {
      id: 4,
      title: '简书版权',
      imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png',
    },
    {
      id: 5,
      title: '简书大学堂',
      imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png',
    },
  ]
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.SEARCH_INPUT_FOCUS:
      return state.set('focused', true)
    default:
      return state
  }
}