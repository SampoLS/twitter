import styled from "styled-components";

interface Props {
  username: string;
}

export default function PopupWhenHoverAboveUser({ username }: Props) {
  return (
    <Article className="popup">
      <section>
        <div>
          <div>
            <img src="/" alt="logo" />
          </div>
          <div>{username}</div>
          <div>account</div>
        </div>
        <div>follow</div>
      </section>
      <section>hello world, how are you?</section>
      <section>
        <div>
          <span>number</span> follwer
        </div>
        <div>
          <span>number</span> follwing
        </div>
      </section>
    </Article>
  );
}

const Article = styled.article`
  position: absolute;
  top: 30px;
  width: 300px;
  height: 270px;
  background: white;
  box-shadow: 0 0 3px #ddd;
  border-radius: 20px;
  transition: all linear 150ms;
`;
