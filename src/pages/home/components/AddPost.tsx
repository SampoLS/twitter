import styled from "styled-components";

import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

import { useState } from "react";
import {
  useAddPostMutation,
  useGetPostsQuery,
} from "../../../service/postsApi";

import userLogo from "../../../assets/imgs/userlogo.jpg";

const icons = [
  { id: 1, icon: <PermMediaOutlinedIcon /> },
  { id: 2, icon: <GifBoxOutlinedIcon /> },
  { id: 3, icon: <PollOutlinedIcon /> },
  { id: 4, icon: <SentimentSatisfiedOutlinedIcon /> },
  { id: 5, icon: <ScheduleOutlinedIcon /> },
  { id: 6, icon: <FmdGoodOutlinedIcon /> },
];

export default function AddPost() {
  const [post, setPost] = useState("");
  const [updatedPost] = useAddPostMutation();
  const { refetch } = useGetPostsQuery("");

  const onTweetClick = async () => {
    await updatedPost({
      name: "tamelo",
      contents: post,
      avatarUrl: userLogo,
      reply: Math.ceil(Math.random() + 4) * 21,
      retweet: Math.ceil(Math.random() + 10) * 48,
      favs: Math.ceil(Math.random() + 15) * 18,
    });
    refetch();
    setPost("");
  };

  return (
    <Box>
      <form>
        <textarea
          value={post}
          onChange={(e) => setPost(e.target.value)}
          placeholder="What's happening?"
        ></textarea>
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
          <button onClick={onTweetClick}>Tweet</button>
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
      min-height: 50px;
      outline: none;
      border: none;
      resize: vertical;
      font-size: 1rem;
      font-family: roboto
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
    font-size: 1.3rem;
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
    cursor: pointer;
  }
`;
