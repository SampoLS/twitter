import { memo } from "react";
import styled from "styled-components";

interface ImgUrl {
  imgUrl: string;
}

const UserLogo = ({ imgUrl }: ImgUrl) => {
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
  img {
    width: inherit;
    height: inherit;
  }
`;
export default memo(UserLogo);
