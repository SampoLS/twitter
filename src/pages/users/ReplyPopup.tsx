import { memo, useState } from "react";
import styled from "styled-components";

import { useGetPostsQuery } from "../../service/postsApi";

import Text from "../../components/Text";
import Icons from "../../components/Icons";
import Reply from "../../components/Button";

function ReplyPopup({ single, idx }: any) {
  const { data: posts } = useGetPostsQuery("");
  const [post, setPost] = useState("");

  let item;
  if (posts) item = posts.filter((p: any) => p.userId === "mr_good_man");

  const closePopup = (idx: number) => {
    const popup = document.querySelectorAll(".reply-box");
    for (let i = 0; i < popup.length; i++) {
      if (i === idx) (popup[i] as HTMLElement).style.display = "none";
    }
  };

  return (
    <Section className="reply-box">
      <div>
        <span className="close" onClick={() => closePopup(idx)}>
          X
        </span>
      </div>
      <div className="box">
        <div className="avatar">
          <img src={single.avatarUrl} alt="" />
        </div>
        <div className="info">
          <div>{single.name}</div>
          <div>{single.contents}</div>
          <div className="reply-to">
            <span>Replying to </span>
            <span>@{single.userId}</span>
          </div>
        </div>
      </div>
      <div className="author">
        <div className="author-avatar">
          <img src={item[0].avatarUrl} alt="" />
        </div>
        <div className="reply-icon-box">
          <Text post={post} setPost={setPost} text="Tweet your reply" />
          <div className="icon-and-reply">
            <Icons />
            <Reply onHandleClick={() => {}} post={post} />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default memo(ReplyPopup);

const Section = styled.section`
  width: 550px;
  height: 450px;
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  display: none;
  z-index: 20;

  .close {
    display: inline-block;
    padding-top: 10px;
    padding-left: 10px;
    cursor: pointer;
  }

  .box {
    display: flex;
    margin-top: 30px;
    padding-left: 10px;

    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .info {
      margin-left: 20px;
      flex: 1;
    }
  }

  .author {
    display: flex;
    padding-top: 100px;
    padding-left: 10px;

    .reply-icon-box {
      flex: 1;
      overflow: hidden;
      margin-left: 20px;
    }

    .icon-and-reply {
      display: flex;
      align-items: center;
      padding-top: 50px;

      button {
        border: none;
        outline: none;
        padding: 10px 20px;
        background: dodgerblue;
        color: white;
        border-radius: 20px;
        cursor: pointer;
        margin-left: 100px;
      }
    }

    .textarea {
      width: 100%;
      min-height: 50px;
      outline: none;
      border: none;
      resize: vertical;
      font-size: 1rem;
      font-family: roboto;
    }
  }

  .author-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
