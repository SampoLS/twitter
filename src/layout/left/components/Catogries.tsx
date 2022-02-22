import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AiFillHome, AiOutlineMessage, AiOutlineUser } from "react-icons/ai";
import { RiFindReplaceLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsBookmark, BsCardList } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { useUserContext } from "../../../context/data";

type Cator = {
  id: number;
  title: string;
  icon: React.ReactNode;
}[];

const catogries: Cator = [
  { id: 1, title: "Home", icon: <AiFillHome /> },
  { id: 2, title: "Explore", icon: <RiFindReplaceLine /> },
  { id: 3, title: "Notifications", icon: <IoMdNotificationsOutline /> },
  { id: 4, title: "Messages", icon: <AiOutlineMessage /> },
  { id: 5, title: "Bookmarks", icon: <BsBookmark /> },
  { id: 6, title: "Lists", icon: <BsCardList /> },
  { id: 7, title: "Profile", icon: <AiOutlineUser /> },
  { id: 8, title: "More", icon: <CgMoreO /> },
];

export default function Catorgries() {
  const { count } = useUserContext();
  return (
    <Nav>
      <ul>
        {catogries.map((item) => {
          const { id, title, icon } = item;
          return title === "Home" ? (
            <li key={id}>
              <NavLink to={title.toLowerCase()}>
                <span className="icon">
                  {icon}
                  <span className="count">{count.count}</span>
                </span>
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
