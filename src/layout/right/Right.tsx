import styled from "styled-components";
import { Props } from "../Layout";

export default function Right({ children }: Props) {
  return <Aside>{children}</Aside>;
}

const Aside = styled.aside`
  width: 30%;
  position: fixed;
  right: 0;
  top: 0;
`;
