import styled from "styled-components";

export default function Info({ person }: any) {
  const { name, imgUrl, avatarUrl, userId, followers, following } = person[0];
  return (
    <>
      <section className="top-bar">
        <div className="go-back">go back</div>
        <div className="right">
          <header>
            <h1>{name}</h1>
          </header>
          <p>1000 twittes</p>
        </div>
      </section>
      <Section>
        <div className="bk-img">
          <img src={imgUrl} alt="background" />
        </div>
        <div className="info">
          <div>
            <div className="img-box">
              <img src={avatarUrl} alt="" />
            </div>
            <div className="user name">{name}</div>
            <div className="user account">@{userId}</div>
          </div>
          <div className="more">...</div>
          <div className="follow">Follow</div>
        </div>
        <div className="describtion">
          Purdue ‘22 B.S. in Planetary Science 🪐| Former NASA intern | Women in
          STEM 👩🏻‍🔬| “We’re made of star stuff. We’re a way for the cosmos to know
          itself.”-CS
        </div>
        <section className="box">
          <div className="following">
            <span>{following}</span> Following
          </div>
          <div className="followers">
            <span>{followers}</span> Followers
          </div>
        </section>
      </Section>
    </>
  );
}
const Section = styled.section`
  .bk-img {
    width: 100%;
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .info {
    position: relative;
  }

  .img-box {
    width: 130px;
    height: 130px;
    border: 5px solid white;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    top: -75px;
    left: 20px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .name {
    padding-top: 70px;
    font-size: 18px;
    font-weight: bold;
  }
  .account {
    color: #666;
  }
  .user {
    margin-left: 20px;
  }

  .more,
  .follow {
    position: absolute;
    top: 10px;
  }

  .more {
    right: 130px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #ddd;
    font-weight: bolder;
    text-align: center;
    line-height: 30px;
  }
  .follow {
    right: 10px;
    width: 100px;
    height: 40px;
    background: black;
    color: white;
    border-radius: 20px;
    text-align: center;
    line-height: 40px;
    font-weight: bold;
    font-family: roboto;
    cursor: pointer;
  }
  .describtion {
    padding: 20px;
  }
  .box {
    display: flex;
    padding-left: 20px;
    font-family: roboto;
    font-size: 14px;
    .followers {
      margin-left: 10px;
    }
    span {
      font-weight: bold;
    }
  }
`;
