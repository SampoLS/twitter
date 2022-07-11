import styled from "styled-components";

export default function Title() {
  return (
    <Box>
      <h1>Home</h1>
    </Box>
  );
}

const Box = styled.section`
  width: 46.9%;
  height: 50px;
  background-color: white;
  padding-top: 1.4rem;
  padding-bottom: 1rem; 
  position: fixed;
  top: 0;
  z-index: 2;
  h1 {
    font-size: 18px;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
