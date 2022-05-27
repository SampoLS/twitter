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
          const { id, name, contents, avatarUrl } = post;
          return (
            <SinglePost key={id}>
              <Avatar imgUrl={avatarUrl} />
              <Contents username={name} contents={contents}>
                <PostTraits post={post} />
              </Contents>
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
