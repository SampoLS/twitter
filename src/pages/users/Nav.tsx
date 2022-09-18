import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";

export default function Nav() {
  const { userId } = useParams();
  return (
    <Section>
      <div>
        <NavLink to={`/${userId}`}>Tweets</NavLink>
      </div>
      <div>
        <NavLink to={`/${userId}/with_replies`}>Tweets & replies</NavLink>
      </div>
      <div>
        <NavLink to={`/${userId}/media`}>Media</NavLink>
      </div>
      <div>
        <NavLink to={`/${userId}/likes`}>Likes</NavLink>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin-top: 20px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-family: roboto;
  font-size: 15px;
  a {
    color: #777;
  }
  .active {
    color: black;
  }
`;
