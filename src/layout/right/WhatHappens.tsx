import styled from 'styled-components'
import Contents from './Contents';

export default function WhatHappnes() {
  return (
    <Box>
      <Contents />
    </Box>
  )
}

const Box = styled.div`
  width: 90%;
  margin: 1rem auto; 
  border-radius: 15px;
  background-color: #eff3f4;
`;