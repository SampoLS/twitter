import React, { useState } from "react";
import styled from "styled-components";

import Tweet from "../../../components/Button";

import {
  useAddPostMutation,
  useGetPostsQuery,
} from "../../../service/postsApi";

import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";

import userLogo from "../../../assets/imgs/userlogo.jpg";
import Icons from "../../../components/Icons";
import Text from "../../../components/Text";

export default function AddPost() {
  const [post, setPost] = useState("");
  const [path, setPath] = useState<string | null>();

  const [updatedPost] = useAddPostMutation();
  const { refetch } = useGetPostsQuery("");

  const addPost = async () => {
    const time = new Date();
    const date = time.getDate();
    const month = time.getMonth() + 1;
    const year = time.getFullYear();
    const postTime = date + "-" + month + "-" + year;

    await updatedPost({
      name: "tamelo",
      userId: "mr_good_man",
      contents: post,
      avatarUrl: userLogo,
      reply: Math.ceil(Math.random() + 4) * 21,
      retweet: Math.ceil(Math.random() + 10) * 48,
      favs: Math.ceil(Math.random() + 15) * 18,
      imgUrl: path,
      postTime,
    });
    refetch();
    setPost("");
    setPath(null);
  };

  const onUploadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    /*const file = document.getElementById('file') as HTMLInputElement;
    if (file.files) {
      const path = URL.createObjectURL(file.files[0]);
      setPath(path);
      // URL.revokeObjectURL(path)
    }
    */
    if (target.files) {
      const file = target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.addEventListener("load", (e: any) => {
        setPath(e.target.result);
      });
    }
  };

  return (
    <Box>
      <form>
        <Text post={post} setPost={setPost} text="What's happening?" />
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
              alt="img"
              style={{ width: "100%", height: "100%" }}
              onClick={() => setPath(null)}
            />
          </div>
        )}
      </form>
      <div className="reply">
        <span>Everyone can reply</span>
      </div>
      <ToolKitBox>
        <div style={{ display: "flex", cursor: "pointer" }}>
          <div className="file-box">
            <label htmlFor="file">
              <PermMediaOutlinedIcon />
            </label>
            <input
              type="file"
              id="file"
              accept="image/*"
              onChange={(e) => onUploadImg(e)}
            />
          </div>
          <Icons />
        </div>
        <Tweet onHandleClick={addPost} post={post} />
      </ToolKitBox>
    </Box>
  );
}

const Box = styled.div`
  flex: 1;
  form {
    padding-left: 1rem;
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

const ToolKitBox = styled.div`
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

  .icons {
    margin-left: 1rem;
    display: flex;
  }
`;
