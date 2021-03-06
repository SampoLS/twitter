import TwitterIcon from '@mui/icons-material/Twitter';
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Logo() {
  return (
    <LogoBox>
      <NavLink to="/home">
        <TwitterIcon />
      </NavLink>
    </LogoBox>
  );
}

const LogoBox = styled.div`
  padding-top: 1rem;
  padding-left: 1.2rem;
  a {
    color: dodgerblue;
    
    svg {
      font-size: 2rem;
    }
  }
`;
