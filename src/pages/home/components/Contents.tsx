import { memo, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PopupWhenHoverAboveUser from "./PopupWhenHoverAboveUser";

interface Props {
  username: string;
  contents: string;
  imgUrl: string;
  width: string;
  height: string;
  userId: string;
  postTime: string;
  idx: number;
}

const Contents = (props: Props) => {
  const { username, contents, imgUrl, width, height, userId, postTime, idx } =
    props;

  const [isShow, setIsShow] = useState(false);

  let id: ReturnType<typeof setTimeout>;

  const showPopup = (idx: number) => {
    const userBox = document.getElementsByClassName("user-box");

    for (let i = 0; i < userBox.length; i++) {
      if (i === idx) {
        setTimeout(() => {
          setIsShow(true);
        }, 500);
        /*
        setTimeout(() => {
          const article = document.createElement("article");
          article.className = "popup";
          article.textContent = username;
          userBox[i].appendChild(article);
          article.addEventListener("mouseover", () => {
            clearTimeout(id);
          });
          article.addEventListener("mouseleave", () => {
            const popup = document.querySelector(".popup") as HTMLElement;
            userBox[i].removeChild(popup);
          });
        }, 500);
        */
      }
    }
  };
  const hidePopup = (idx: number) => {
    const userBox = document.getElementsByClassName("user-box");
    for (let i = 0; i < userBox.length; i++) {
      if (i === idx) {
        id = setTimeout(() => {
          setIsShow(false);
        }, 600);
        // id = setTimeout(() => {
        //   const popup = document.querySelector(".popup") as HTMLElement;
        //   userBox[i].removeChild(popup);
        // }, 600);
      }
    }
  };
  return (
    <Box>
      <div className="user-box">
        <Link
          to="/"
          className="username"
          onMouseOver={() => showPopup(idx)}
          onMouseLeave={() => hidePopup(idx)}
        >
          {username}
        </Link>
        <div>
          <span className="icon">
            <svg viewBox="0 0 24 24" aria-label="Verified account">
              <g>
                <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
              </g>
            </svg>
          </span>
        </div>
        <div className="userId">@{userId}</div>
        <div className="dot-wrapper">
          <span className="dot"></span>
        </div>
        <div className="post-time">{postTime}</div>
      </div>

      {isShow ? <PopupWhenHoverAboveUser username={username} /> : null}
      <div className="contents">
        <Link to={`${username}`}>
          <p>{contents ? contents : "loading..."}</p>
          {imgUrl && (
            <div
              className="media-box"
              style={{ width: `${width}px`, height: `${height}px` }}
            >
              <img src={imgUrl} alt="img" id="imgSize" />
            </div>
          )}
        </Link>
      </div>
    </Box>
  );
};

export default memo(Contents);

const Box = styled.div`
  flex: 1;
  padding-left: 1rem;

  .user-box {
    display: flex;
    align-items: center;
    position: relative;
    &:hover {
      cursor: pointer;
    }

    a {
      height: 18px;
      font-size: 0.9rem;
      font-family: roboto;
      font-weight: bold;
      &:hover {
        border-bottom: 2px solid black;
      }
    }

    .icon {
      width: 20px;
      height: 20px;
      display: block;
      margin-left: 4px;

      svg {
        fill: dodgerblue;
      }
    }

    .userId {
      font-size: 0.95rem;
      margin-left: 4px;
      font-family: roboto;
      color: #666;
    }

    .dot-wrapper {
      display: flex;
      align-items: center;
      margin-left: 0.4rem;
      .dot {
        width: 2px;
        height: 2px;
        border-radius: 50%;
        display: block;
        background: black;
      }
    }

    .post-time {
      margin-top: 2px;
      margin-left: 4px;
      font-family: roboto;
      font-size: 0.9rem;
      color: #666;
    }
  }

  .contents {
    padding-top: 0.5rem;

    .media-box {
      border: 1px solid #eee;
      border-radius: 5px;
      overflow: hidden;
      margin-top: 1.5rem;
    }
  }
`;
