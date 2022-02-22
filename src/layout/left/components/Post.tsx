import styled from "styled-components";

export default function Post() {
  return (
    <Button className="btn-box">
      <button>Tweet</button>
    </Button>
  );
}

const Button = styled.div`
  padding-left: 1.2rem;
  padding-top: 0.5rem;
  button {
    width: 90%;
    height: 50px;
    border-radius: 30px;
    border: none;
    outline: none;
    background: dodgerblue;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 200ms linear;
    :hover {
      background: darkblue;
    }
  }
`;
