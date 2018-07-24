import React, { Component } from 'react'
import { 
  ListWrapper,
  ListItem,
  ListInfo } from '../style'


class List extends Component {
  render() {
    return (
      <ListWrapper>
        <ListItem>
          <ListInfo>
            <h3 className="article-info-title">玩转职场，你还差一个项目管理思维</h3>
            <p className="article-info-summary">PMI（美国项目管理协会）发布的第10次薪酬调查报告显示，PMP（项目管理专业人士）证书是影响项目管理专业人士薪酬位数的重要原因。持有PMP证书...</p>
          </ListInfo>
          <img className="article-pic" src="//upload-images.jianshu.io/upload_images/3052965-f8cfc95f95487cc0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"/>
        </ListItem>
      </ListWrapper>
    )
  }
}

export default List