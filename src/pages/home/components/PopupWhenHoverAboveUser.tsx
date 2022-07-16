import styled from "styled-components";

interface Props {
  name: string;
  avatarUrl: string;
  following: number;
  followers: number;
}

export default function PopupWhenHoverAboveUser(props: Props) {
  const { name, avatarUrl, following, followers } = props;
  return (
    <Article className="popup">
      <section className='top'>
        <div>
          <div className='img-box'>
            <img src={avatarUrl} alt="logo" />
          </div>
          <div className='username'>{name}</div>
          <div className='account'>@{name}</div>
        </div>
        <div className='follow'>follow</div>
      </section>
      <section className='details'>life is boring, do somethings you like</section>
      <section className='follower-box'>
        <div className='followers'>
          {followers} <span className='f-box'> followers</span>
        </div>
        <div className='following'>
          {following} <span className='f-box'> following</span>
        </div>
      </section>
    </Article>
  );
}

const Article = styled.article`
  position: absolute;
  top: 30px;
  left: -120px;
  width: 300px;
  height: 270px;
  background: white;
  box-shadow: 0 0 3px #ddd;
  border-radius: 20px;
  transition: all linear 150ms;
  padding: 20px 30px;
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
    }
  }
  .img-box {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%
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
    margin-top: 20px
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
      margin-left: 20px
    }
  }
`;
