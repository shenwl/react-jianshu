import React, { Component } from 'react'
import { TopicWrapper, TopicItem } from '../style'
import { connect } from 'react-redux'


class Topic extends Component {
  render() {
    const { topicList } = this.props
    return (
      <TopicWrapper>
        {
          topicList.map((topic, index) => {
            return (
              <TopicItem key={topic.get('id')}>
                <img className="topic-name-img" src={topic.get('imgUrl')} alt=''/>
                {topic.get('title')}
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    topicList: state.getIn(['home', 'topicList']),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic)