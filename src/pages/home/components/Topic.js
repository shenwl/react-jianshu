import React, { Component } from 'react'
import { TopicWrapper, TopicItem } from '../style'


class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        <TopicItem>
          <img className="topic-name-img" src="//upload.jianshu.io/collections/images/75/22.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" />
          科技美学
        </TopicItem>
        <TopicItem>
          <img className="topic-name-img" src="//upload.jianshu.io/collections/images/75/22.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" />
          生活大爆炸
        </TopicItem>
        <TopicItem>
          <img className="topic-name-img" src="//upload.jianshu.io/collections/images/75/22.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" />
          动漫
        </TopicItem>
        <TopicItem>
          <img className="topic-name-img" src="//upload.jianshu.io/collections/images/75/22.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" />
          前端
        </TopicItem>
        <TopicItem>
          <img className="topic-name-img" src="//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" />
          社会热点
        </TopicItem>
      </TopicWrapper>
    )
  }
}

export default Topic