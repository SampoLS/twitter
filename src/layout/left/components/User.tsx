import styled from "styled-components";
import { Link } from "react-router-dom";

import userLogo from "../../../assets/imgs/userlogo.jpg";

import { useGetUserQuery } from "../../../service/postsApi";

interface IUser {
  id: string;
  name: string;
  isLogined: boolean;
}

export default function User() {
  const { data: users } = useGetUserQuery("");

  const isLogined = localStorage.getItem('isLoggined');

  let user;
  if (users) {
    const filteredUser:Array<IUser> = users.filter((user: IUser) => user.id === "tamelo")
    user = filteredUser[0];
  }

  const showForm = () => {
    const form = document.getElementById('form') as HTMLFormElement
    form.style.display = 'block'
  }

  return (
    <Box>
      <ImgBox onClick={showForm}>
        { isLogined && <img src={userLogo} alt="user" />}
      </ImgBox>
      <Userbox>
        {isLogined ? (
         <>
            <h4>{user?.name}</h4>
            <p>@{user?.id}</p>
         </>
        ) : (
          <>
            <Link to='/login'>Log in</Link>
            <Link to='/login'>Sign up</Link>
          </>
        )}
      </Userbox>
    </Box>
  );
}

const Box = styled.div`
  align-self: end;
  padding-left: 1.2rem;
  padding-bottom: 2rem;
  display: flex;
  align-items: center;
`;
const ImgBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  background: gray;
  &:hover {
    cursor: pointer;
  }
  img {
    width: inherit;
    height: inherit;
  }
`;
const Userbox = styled.div`
  padding-left: 0.8rem;
  p {
    font-size: 0.8rem;
    padding-top: 0.2rem;
    color: #444;
  }
  a {
    font-size: 12px;
    font-weight: bold;
    padding: 10px;
    background: #ddd;
    margin-left: 5px;
    border-radius: 8px;
    &:hover {
      cursor: pointer;
    }
  }
`;
