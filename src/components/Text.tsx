import { memo } from 'react';
import styled from 'styled-components';

interface Props {
  post: string;
  setPost: (val: string) => void;
  text: string
}

function Text({ post, setPost, text }: Props) {
  return (
    <Box>
      <textarea
        className='textarea'
        value={post}
        onChange={(e) => setPost(e.target.value)}
        placeholder={text}
      />
    </Box>
  )
}

export default memo(Text);

const Box = styled.div`
  .textarea {
    width: 100%;
    min-height: 100px;
    outline: none;
    border: none;
    resize: none;
    font-size: 1rem;
    font-family: roboto;
  }
`;
