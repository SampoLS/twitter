import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  username: string;
  contents: string;
  children: React.ReactNode;
}

export default function Contents({ username, contents, children }: Props) {
  return (
    <Box>
      <div>
        <h4>{username}</h4>
      </div>
      <div className="words">
        <Link to={`${username}`}>{contents ? contents : "loading..."}</Link>
      </div>
      <>{children}</>
    </Box>
  );
}

const Box = styled.div`
  flex: 1;
  padding-left: 1rem;
  .words {
    padding-top: 0.5rem;
  }
`;
