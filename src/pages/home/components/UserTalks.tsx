import styled from "styled-components";

interface Props {
  username: string;
  children: React.ReactNode;
}

export default function UserTalks({ username, children }: Props) {
  return (
    <Box>
      <div>
        <h4>{username}</h4>
      </div>
      <div className="words">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, dicta.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        voluptatum sint ratione accusamus officiis, ex sunt voluptates totam
        veritatis dolorum?
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
