import { memo } from "react";
import styled from "styled-components";

interface ImgUrl {
  imgUrl: string;
}

const Avatar = ({ imgUrl }: ImgUrl) => {
  return (
    <ImgBox>
      <img src={imgUrl} alt="user" />
    </ImgBox>
  );
};

const ImgBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  img {
    width: inherit;
    height: inherit;
  }
`;
export default memo(Avatar);
