import { Fragment } from "react";
import styled from "styled-components";

import Avatar from "./components/Avatar";

import AuthorPost from "./components/AuthorPost";
import Title from "./components/Title";

import SinglePost from "./components/SinglePost";
import Contents from "./components/Contents";
import AddPost from "./components/AddPost";
import imgUrl from "../../assets/imgs/userlogo.jpg";
import PostTraits from "./components/PostTraits";
import Position from "./components/Position"

import { useGetPostsQuery } from "../../service/postsApi";

export default function Home() {
  const { data: posts } = useGetPostsQuery("");

  return (
    <Fragment>
      <Title />
      <Postarea>
        <AuthorPost>
          <Avatar imgUrl={imgUrl} />
          <AddPost />
        </AuthorPost>
      </Postarea>
      {posts ? (
        posts.map((post: any) => {
          const { id, name, userId, contents, avatarUrl, imgUrl } = post;

          let width, height;
          if (imgUrl && imgUrl.includes('/')) {
            const res = imgUrl.split("/")
            const imgSize = res[res.length - 1]
            const size = imgSize.split("x")
            width = size[0]
            height = size[1]
          }

          return (
            <SinglePost key={id}>
              <Position />
              <div style={{ display: "flex" }}>
                <Avatar imgUrl={avatarUrl} />
                <article style={{ flex: 1 }}>
                  <Contents
                    username={name}
                    contents={contents}
                    imgUrl={imgUrl}
                    width={width}
                    height={height}
                    userId={userId}
                  />
                  <PostTraits post={post} />
                </article>
              </div>
            </SinglePost>
          );
        })
      ) : (
        <h2>...loading</h2>
      )}
    </Fragment>
  );
}

const Postarea = styled.section`
  width: 100%;
  margin: 0 auto;
  margin-top: 50px;
  border-bottom: 1px solid #eee;
`;
