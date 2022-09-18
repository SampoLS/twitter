import { memo, useState } from "react";
import styled from "styled-components";

import PopupWhenHoverAboveUser from "./PopupWhenHoverAboveUser";

interface Post {
  post: {
    name: string;
    avatarUrl: string;
    following: number;
    followers: number;
    isShow: boolean;
    setIsShow?: (b: boolean) => void;
    timeId?: ReturnType<typeof setTimeout>;
  };
  idx: number;
}

const Avatar = (props: Post) => {
  const { name, avatarUrl, following, followers } = props.post;
  const { idx } = props;

  const [isShow, setIsShow] = useState(false);
  const [timeId, setTimeId] = useState<ReturnType<typeof setTimeout>>();

  let t: ReturnType<typeof setTimeout>;

  const showPopup = () => {
    if (timeId) clearTimeout(timeId);
    setTimeout(() => {
      setIsShow(true);
    }, 500);
  };

  const hidePopup = () => {
    t = setTimeout(() => {
      setIsShow(false);
    }, 500);
    setTimeId(t);
  };

  return (
    <div style={{ position: "relative" }}>
      <ImgBox onMouseEnter={showPopup} onMouseLeave={hidePopup}>
        <img src={avatarUrl} alt="user" />
      </ImgBox>
      <PopupWhenHoverAboveUser
        name={name}
        avatarUrl={avatarUrl}
        followers={followers}
        following={following}
        idx={idx!}
        setIsShow={setIsShow}
        timeId={timeId}
        isShow={isShow}
      />
    </div>
  );
};

const ImgBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  img {
    width: inherit;
    height: inherit;
  }
`;
export default memo(Avatar);
