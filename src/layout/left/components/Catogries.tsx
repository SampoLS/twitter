import { NavLink } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MessageIcon from '@mui/icons-material/Message';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

type Cator = {
  id: number;
  title: string;
  icon: React.ReactNode;
}[];

const catogries: Cator = [
  { id: 1, title: "Home", icon: <HomeIcon /> },
  { id: 2, title: "Explore", icon: <TravelExploreIcon /> },
  { id: 3, title: "Notifications", icon: <NotificationsNoneIcon /> },
  { id: 4, title: "Messages", icon: <MessageIcon /> },
  { id: 5, title: "Bookmarks", icon: <BookmarkBorderIcon /> },
  { id: 6, title: "Lists", icon: <ListAltOutlinedIcon /> },
  { id: 7, title: "Profile", icon: <AccountBoxIcon  /> },
  { id: 8, title: "More", icon: <MoreHorizIcon /> },
];

export default function Catorgries() {
  return (
    <Nav>
      <ul>
        {catogries.map((item) => {
          const { id, title, icon } = item;
          return title === "Home" ? (
            <li key={id}>
              <NavLink to={title.toLowerCase()}>
                <span className="icon">{icon}</span>
                <span className="title">{title}</span>
              </NavLink>
            </li>
          ) : (
            <li key={id}>
              <NavLink to={title.toLowerCase()}>
                <span className="icon">{icon}</span>
                <span className="title">{title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </Nav>
  );
}

const Nav = styled.nav`
  overflow: hidden;
  ul {
    width: inherit;
    height: 50vh;
    li {
      padding-left: 1.2rem;
      a {
        width: inherit;
        height: inherit;
        display: flex;
        align-items: center;
        padding: 10px 20px 10px 0;
        font-size: 1.2rem;
        color: #555;
        font-family: roboto;
        font-weight: 400;
        transition: all 100ms linear;
        :hover {
          background: #eee;
          border-radius: 20px;
        }
        .icon {
          padding-right: 1rem;
          padding-left: 3px;
          font-size: 1.5rem;
          position: relative;
          .count {
            font-size: 0.8rem;
            color: red;
            position: absolute;
            right: 5px;
            top: -5px;
          }
        }
      }
      .active {
        color: black;
        font-weight: bold;
      }
    }
  }
`;
