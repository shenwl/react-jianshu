import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
`
export const HomeLeft = styled.div`
  width: 640px;
  padding-left: 15px;
  padding-top: 30px;
  .banner-img {
    width: 100%;
    height: 240px;
  }
`
export const HomeRight = styled.div`
  padding-top: 30px;
  width: 270px;
`
export const TopicWrapper = styled.div`
  padding: 20px 120px 0 0;
  display: flex;
  flex-wrap: wrap;
`
export const TopicItem = styled.div`
  flex-shrink: 0;
  padding-right: 10px;
  margin-bottom: 20px;
  height: 32px;
  line-height: 32px;
  margin-right: 20px;
  background: #f7f7f7;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-name-img {
    display: block;
    float: left;
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`