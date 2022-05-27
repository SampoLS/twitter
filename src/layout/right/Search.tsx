import styled from "styled-components";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Search() {
  return (
    <Box>
      <SearchBox>
        <span><SearchOutlinedIcon /></span>
        <input type="search" placeholder="Search Twitter" />
      </SearchBox>
    </Box>
  )
}

const Box = styled.div`
  width: 90%;
  overflow: hidden;
  margin: .5rem auto; 
  border-radius: 30px;
  background-color: #eff3f4;
`;

const SearchBox = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  span {
    padding-left: 1rem;
    padding-top: .2rem;
    font-size: 1.2rem;
    color: #868686;
  }
  input {
    width: 100%;
    outline: none;
    border: none;
    padding-top: 0.9rem;
    padding-bottom: 0.9rem;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: #eff3f4;
  }
`;
