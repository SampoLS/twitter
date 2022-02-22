import styled from "styled-components";
import { Props } from "../Layout";

export default function Left({ children }: Props) {
  return (
    <Nav>
      <div className="box">{children}</div>
    </Nav>
  );
}

const Nav = styled.div`
  width: 23%;
  height: 100vh;
  border-right: 1px solid #eee;
  position: fixed;
  left: 0;
  top: 0;
  .box {
    width: 80%;
    height: inherit;
    padding-left: 1rem;
    display: grid;
    grid-template-rows: 10% 60% 10% 20%;
  }
`;
