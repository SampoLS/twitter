import styled from 'styled-components';

import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

const icons = [
  { id: 1, icon: <GifBoxOutlinedIcon /> },
  { id: 2, icon: <PollOutlinedIcon /> },
  { id: 3, icon: <SentimentSatisfiedOutlinedIcon /> },
  { id: 4, icon: <ScheduleOutlinedIcon /> },
  { id: 5, icon: <FmdGoodOutlinedIcon /> },
];

export default function Icons() {
  return (
     <Box className="icons">
       {icons.map((item) => {
         return (
           <div className="icon"key={item.id}>
             {item.icon}
           </div>
         );
       })}
    </Box>
  )
}

const Box = styled.div`
  margin-left: 1rem;
  display: flex;

  .icon {
    font-size: 1.3rem;
    color: dodgerblue;
    padding-right: 1rem;
  }
`;