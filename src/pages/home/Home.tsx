import { memo, useContext } from "react";
import styled from "styled-components";

import Post from "./components/Post";
import Title from "./components/Title";
import UserLogo from "./components/UserLogo";
import AuthorPost from "./components/AuthorPost";
import UserPosts from "./components/UserPosts";
import { UserContext } from "../../context/data";
import UserTalks from "./components/UserTalks";
import imgUrl from "../../assets/imgs/userlogo.jpg";
import UserComment from "./components/UserComment";

const Home = () => {
  const person = useContext(UserContext);
  return (
    <>
      <Title />
      <Postarea>
        <AuthorPost>
          <UserLogo imgUrl={imgUrl} />
          <Post />
        </AuthorPost>
      </Postarea>
      {person.users.map((person) => {
        return (
          <UserPosts key={person.id}>
            <UserLogo imgUrl={person.avatar_url} />
            <UserTalks username={person.login}>
              <UserComment />
            </UserTalks>
          </UserPosts>
        );
      })}
    </>
  );
};

const Postarea = styled.section`
  width: 100%;
  margin: 0 auto;
  margin-top: 50px;
  border-bottom: 1px solid #eee;
`;
export default memo(Home);
