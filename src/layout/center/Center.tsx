import styled from "styled-components";
import { Props } from "../Layout";

export default function Center({ children }: Props) {
  return <Main>{children}</Main>;
}

const Main = styled.main`
  border-right: 1px solid #eee;
  width: 47%;
  position: absolute;
  margin-left: 23%;
  // overflow: hidden;
`;
