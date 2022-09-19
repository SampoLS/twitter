import styled from "styled-components";

interface Props {
  name: string;
  idx: number;
  avatarUrl: string;
  following: number;
  followers: number;
  isShow: boolean;
  setIsShow?: (b: boolean) => void;
  timeId?: ReturnType<typeof setTimeout>;
}

export default function PopupWhenHoverAboveUser(props: Props) {
  const { name, avatarUrl, isShow, following, followers, setIsShow, timeId } =
    props;

  const showPopup = () => {
    setTimeout(() => {
      setIsShow!(true);
    }, 100);
    clearTimeout(timeId!);
  };

  const hidePopup = () => {
    setTimeout(() => {
      setIsShow!(false);
    }, 100);
  };

  return (
    <Article
      className="popup"
      style={{
        display: isShow ? "block" : "none",
      }}
      onMouseEnter={showPopup}
      onMouseLeave={hidePopup}
    >
      <section className="top">
        <div>
          <div className="img-box">
            <img src={avatarUrl} alt="logo" />
          </div>
          <div className="username">{name}</div>
          <div className="account">@{name}</div>
        </div>
        <div className="follow">follow</div>
      </section>
      <section className="details">
        life is boring, do somethings you like
      </section>
      <section className="follower-box">
        <div className="followers">
          {followers} <span className="f-box"> followers</span>
        </div>
        <div className="following">
          {following} <span className="f-box"> following</span>
        </div>
      </section>
    </Article>
  );
}

const Article = styled.article`
  width: 300px;
  height: 270px;
  padding: 20px 30px;
  border-radius: 20px;
  background: white;
  box-shadow: 0 0 3px #ddd;
  position: absolute;
  top: 60px;
  left: -120px;
  z-index: 10;

  .top {
    display: flex;
    justify-content: space-between;

    .follow {
      width: 100px;
      height: 30px;
      background-color: black;
      color: white;
      text-align: center;
      line-height: 30px;
      border-radius: 20px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .img-box {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .username {
    margin-top: 10px;
    font-weight: bold;
    font-size: 16px;
    font-family: roboto;
  }

  .account {
    margin-top: 5px;
    font-size: 16px;
  }

  .details {
    margin-top: 20px;
  }

  .f-box {
    color: #666;
    font-size: 14px;
  }
  .follower-box {
    margin-top: 40px;
    font-family: roboto;
    display: flex;
    .following {
      margin-left: 20px;
    }
  }
`;
