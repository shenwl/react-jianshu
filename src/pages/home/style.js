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
    height: 270px;
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
export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top: 1px solid #f0f0f0;
`
export const ListItem = styled.div`
  height: 124px;
  padding: 12px 0 12px 0;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  .article-pic {
    display: block;
    width: 120px;
    height: 100%;
    border-radius: 10px;
  }
`
export const ListInfo = styled.div`
  width: 500px;
  .article-info-title {
    font-size: 19px;
    line-height: 1.5;
    color: #333;
    font-weight: bold;
  }
  .article-info-summary {
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`
export const RecommendWrapper = styled.div`
  margin-top: -5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 280px;
  height: 275px;
`
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`
export const WriterWrapper = styled.div`
  margin-top: 45px;
  width: 278px;
  height: 300px;
  text-align: center;
  display: flex;
  flex-direction: column
`
export const WriterItem = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  .follow-button {
    margin-top: 14px;
    font-size: 13px;
    color: #42c02e;
    cursor: pointer;
    .add {
      font-size: 18px;
      cursor: pointer;
    }
  }
`
export const WriterInfo = styled.div`
  display: flex;
  .writer-avatar {
    width: 48px;
    height: 48px;
    border-radius: 24px;
    cursor: pointer;
  }
  .info-text {
    display: flex;
    flex-direction: column;
    text-align: left;
    .writer-name {
      font-size: 14px;
      padding-top: 6px;
      margin-left: 5px;
      cursor: pointer;
    }
    .writer-desc {
      margin-top: 10px;
      font-size: 12px;
      margin-left: 5px;
      color: #969696;
      float: left;
    }
  }
`
export const WriterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    display: inline-block;
    font-size: 14px;
    color: #969696;
  }
`
export const LoadMore = styled.div`
  margin: 30px 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #a5a5a5;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`
export const GoTop = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 50px;
  height: 50px;
  font-size: 30px;
  font-weight: 300;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  &:hover {
    background: #eee;
  }
`