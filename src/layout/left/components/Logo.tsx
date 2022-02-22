import { BsTwitter } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Logo() {
  return (
    <LogoBox>
      <NavLink to="/home">
        <BsTwitter />
      </NavLink>
    </LogoBox>
  );
}
const LogoBox = styled.div`
  font-size: 1.8rem;
  padding-top: 1rem;
  padding-left: 1.2rem;
  a {
    color: dodgerblue;
  }
`;
