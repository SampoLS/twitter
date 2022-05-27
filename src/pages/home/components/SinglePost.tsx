import styled from "styled-components";
import { Props } from "../../../layout/Layout";

export default function SinglePost({ children }: Props) {
  return <Box>{children}</Box>;
}
const Box = styled.section`
  width: 100%;
  display: flex;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  transition: all 70ms linear;
  &:hover {
    background: #F6F6F6;
  }
`;
