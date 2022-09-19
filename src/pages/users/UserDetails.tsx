import { useParams, Outlet } from "react-router-dom";
import styled from "styled-components";
import { useGetPostsQuery } from "../../service/postsApi";
import Info from "./Info";
import Nav from "./Nav";

export default function UserDetails() {
  const params = useParams();
  const { data: info } = useGetPostsQuery("");
  
  let person: any = [];
  if (info) {
    person = info.filter((p: any) => {
      return p.userId === params.userId;
    });
  }

  return (
    <Main>
      {person.length !== 0 ? (
        <>
          <Info person={person} />
          <Nav />
          <Outlet />
        </>
      ) : (
        <div>...loading</div>
      )}
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  .top-bar {
    display: flex;
    width: 100%;
    height: 50px;

    .go-back {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 30px;
    }
    .right {
      margin-left: 30px;
      margin-top: 5px;
      font-size: 15px;
      p {
        color: #666;
      }
    }
  }
`;
