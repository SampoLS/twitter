import styled from "styled-components";

import { Props } from "../../../layout/Layout";

export default function AuthorPost({ children }: Props) {
  return <Box>{children}</Box>;
}

const Box = styled.div`
  height: inherit;
  display: flex;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;
