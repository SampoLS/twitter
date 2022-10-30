import styled from 'styled-components';
import { useGetHappensQuery } from '../../service/postsApi';

interface Item {
  id: number;
  author: string;
  time: string;
  contents: string;
  imgUrl: string;
}

export default function Contents() {
  const { data } = useGetHappensQuery("");
  let contents;
  if (data) {
    contents = data.map((item: Item) => {
      const { id, time, author, contents, imgUrl } = item;
      return (
        <Article key={id}>
          <section className='left'>
            <div>
              <span className='author'>{author}</span>
              <span className='dot'></span>
              <span className='time'>{time}</span>
            </div>
            <div className='content'>{contents}</div>
          </section>
          <section className='right'>
            <img src={imgUrl} alt="/" />
          </section>
        </Article>
      )
    })
  }

  return (
    <>
      <Title>What's happening</Title>
      {contents}
    </>
  )
}

const Title = styled.h2`
  padding: 10px;
  font-size: 20px;
  font-family: roboto;
`;
const Article = styled.article`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  transition: all 200ms;
  &:hover {
    cursor: pointer;
    background-color: #cecece54; 
  }

  .left {
    width: 75%;
    span {
      font-size: 12px;
      color: #666;
      margin-right: 5px;
      font-family: roboto;
    }
    .dot {
      display: inline-block;
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background-color: #666;
    }

    .content {
      margin-top: 5px;
      font-weight: bold;
      font-size: 14px;
      font-family: roboto;
    }
  }

  .right {
    width: 25%;
    height: 70px;
    overflow: hidden;
    border-radius: 10px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
