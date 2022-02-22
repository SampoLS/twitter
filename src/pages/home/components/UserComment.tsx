import { memo, useCallback } from "react";
import styled from "styled-components";
import { useUserContext } from "../../../context/data";

const UserComment = () => {
  let { dispatch } = useUserContext();
  const handleClick = useCallback(() => {
    dispatch({
      type: "HOME_INFO",
    });
  }, []);
  return (
    <Box>
      <span>comment</span>
      <span>retweet</span>
      <span onClick={handleClick}>fav</span>
      <span>share</span>
    </Box>
  );
};

const Box = styled.div`
  padding-top: 1rem;
  span {
    padding-right: 4rem;
    font-size: 0.8rem;
  }
`;
export default memo(UserComment);
