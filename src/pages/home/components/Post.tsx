import styled from "styled-components";

import { HiOutlinePhotograph } from "react-icons/hi";
import { AiOutlineFileGif, AiOutlineSchedule } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { GiPositionMarker } from "react-icons/gi";

const icons = [
  { id: 1, icon: <HiOutlinePhotograph /> },
  { id: 2, icon: <AiOutlineFileGif /> },
  { id: 3, icon: <BiPoll /> },
  { id: 4, icon: <BsEmojiSmile /> },
  { id: 5, icon: <AiOutlineSchedule /> },
  { id: 6, icon: <GiPositionMarker /> },
];

export default function Post() {
  return (
    <Box>
      <form>
        <textarea placeholder="What's happening?"></textarea>
      </form>
      <div className="reply">
        <span>Everyone can reply</span>
      </div>
      <Tweet>
        <div className="icons">
          {icons.map((item) => {
            return (
              <a href="/" key={item.id}>
                {item.icon}
              </a>
            );
          })}
        </div>
        <div className="tweet">
          <button>Tweet</button>
        </div>
      </Tweet>
    </Box>
  );
}

const Box = styled.div`
  flex: 1;
  form {
    padding-left: 1rem;
    textarea {
      width: 100%;
      outline: none;
      border: none;
    }
  }
  .reply {
    border-bottom: 1px solid #eee;
    padding-bottom: 1rem;
    padding-left: 1rem;
    font-size: 0.8rem;
    font-family: arial;
    font-weight: bold;
    color: dodgerblue;
  }
`;

const Tweet = styled.div`
  padding-left: 1rem;
  width: inherit;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    font-size: 1rem;
    color: dodgerblue;
    padding-right: 1rem;
  }
  button {
    border: none;
    outline: none;
    padding: 10px 20px;
    background: dodgerblue;
    color: white;
    border-radius: 20px;
  }
`;
