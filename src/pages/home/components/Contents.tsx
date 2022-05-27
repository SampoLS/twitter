import { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  username: string;
  contents: string;
  imgUrl: string;
  width: string;
  height: string;
}

const Contents = (props: Props) => {
  const { username, contents, imgUrl, width, height } = props;
  return (
    <Box>
      <div>
        <h4>{username}</h4>
      </div>
      <div className="contents">
        <Link to={`${username}`}>
          <p>{contents ? contents : "loading..."}</p>
          {imgUrl ? (
            <div
              className="media-box"
              style={{width: `${width}px`, height: `${height}px` }}
            >
              <img src={imgUrl} alt="img" id="imgSize" />
            </div>
          ) : null}
        </Link>
      </div>
    </Box>
  );
};

export default memo(Contents);

const Box = styled.div`
  flex: 1;
  padding-left: 1rem;

  .contents {
    padding-top: 0.5rem;

    .media-box {
      border: 1px solid #eee;
      border-radius: 5px;
      overflow: hidden;
      margin-top: 1.5rem;
    }
  }
`;
