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
import Position from "./components/Position";

import { useGetPostsQuery } from "../../service/postsApi";

import { getImgSize } from "../../utils/getImgSize";

export default function Home() {
  const { data: posts } = useGetPostsQuery("");

  return (
    <Fragment>
      <Title />
      <Postarea>
        <AuthorPost>
          {/*<Avatar imgUrl={imgUrl} />*/}
          <AddPost />
        </AuthorPost>
      </Postarea>
      {posts ? (
        posts.map((post: any, idx: number) => {
          const { id, avatarUrl, imgUrl } = post;

          let width: string = "";
          let height: string = "";
          if (imgUrl) {
            const imgSize = getImgSize(imgUrl);
            width = imgSize!.width;
            height = imgSize!.height;
          }

          return (
            <SinglePost key={id}>
              <Position />
              <div style={{ display: "flex" }}>
                <Avatar post={post} idx={idx} />
                <article style={{ flex: 1, position: "relative" }}>
                  <Contents
                    single={post}
                    idx={idx}
                    width={width}
                    height={height}
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
