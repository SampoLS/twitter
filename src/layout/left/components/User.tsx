import styled from "styled-components";
import userLogo from "../../../assets/imgs/userlogo.jpg";

export default function User() {
  return (
    <Box>
      <ImgBox>
        <img src={userLogo} alt="user" />
      </ImgBox>
      <Userbox>
        <h4>tamelo</h4>
        <p>@mr_good_man</p>
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
`;
