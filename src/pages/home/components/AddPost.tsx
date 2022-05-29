import React, { useState } from "react";
import styled from "styled-components";

import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

import {
  useAddPostMutation,
  useGetPostsQuery,
} from "../../../service/postsApi";

import userLogo from "../../../assets/imgs/userlogo.jpg";

const icons = [
  { id: 1, icon: <GifBoxOutlinedIcon /> },
  { id: 2, icon: <PollOutlinedIcon /> },
  { id: 3, icon: <SentimentSatisfiedOutlinedIcon /> },
  { id: 4, icon: <ScheduleOutlinedIcon /> },
  { id: 5, icon: <FmdGoodOutlinedIcon /> },
];

export default function AddPost() {
  const [post, setPost] = useState("");
  const [path, setPath] = useState<string | null>();

  const [updatedPost] = useAddPostMutation();
  const { refetch } = useGetPostsQuery("");

  const onTweetClick = async () => {
    await updatedPost({
      name: "tamelo",
      userId: "mr_good_man",
      contents: post,
      avatarUrl: userLogo,
      reply: Math.ceil(Math.random() + 4) * 21,
      retweet: Math.ceil(Math.random() + 10) * 48,
      favs: Math.ceil(Math.random() + 15) * 18,
      imgUrl: path,
    });
    refetch();
    setPost("");
    setPath(null);
  };

  const onSetMedia = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target) {
      if (target.files) {
        const file = target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.addEventListener("load", (e: any) => {
          // console.log(e.target.result) // Super long string
          setPath(e.target.result); 
        });
      }
    }
  };

  return (
    <Box>
      <form>
        <textarea
          value={post}
          onChange={(e) => setPost(e.target.value)}
          placeholder="What's happening?"
        />
        {path && (
          <div
            className="media-show-area"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <img
              src={path}
              alt="image"
              style={{ width: "100%", height: "100%" }}
              onClick={() => setPath(null)}
            />
          </div>
        )}
      </form>
      <div className="reply">
        <span>Everyone can reply</span>
      </div>
      <Tweet>
        <div style={{ display: "flex", cursor: "pointer" }}>
          <div className="file-box">
            <label htmlFor="file">
              <PermMediaOutlinedIcon />
            </label>
            <input
              type="file"
              id="file"
              accept="image/*"
              onChange={(e) => onSetMedia(e)}
            />
          </div>
          <div className="icons">
            {icons.map((item) => {
              return (
                <div
                  className="icon"
                  key={item.id}
                  onClick={() => {
                    console.log("hello");
                  }}
                >
                  {item.icon}
                </div>
              );
            })}
          </div>
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
      font-family: roboto;
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

  .file-box {
    label {
      color: dodgerblue;
      &:hover {
        cursor: pointer;
      }
    }

    #file {
      visibility: hidden;
      position: fixed;
      top: -9999px;
    }
  }
  .icon {
    font-size: 1.3rem;
    color: dodgerblue;
    padding-right: 1rem;
  }

  .icons {
    margin-left: 1rem;
    display: flex;
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
