import { memo } from 'react';
import styled from "styled-components";

interface Props {
  onHandleClick: () => void;
  post: string;
}

function Button(props: Props) {
  const { onHandleClick, post } = props;
  const trimedPost = post.trim();
  return (
    <Box>
      <button
        onClick={onHandleClick}
        className="tweet-btn"
        disabled={trimedPost  === "" ? true : false}
        style={{
          opacity: trimedPost === "" ? "0.5" : "1",
          cursor: trimedPost === "" ? "default" : "pointer",
        }}
      >
        Tweet
      </button>
    </Box>
  )
}

export default memo(Button); 

const Box = styled.div`
  button {
    border: none;
    outline: none;
    padding: 10px 20px;
    background: dodgerblue;
    color: white;
    border-radius: 20px;
  }
`;
