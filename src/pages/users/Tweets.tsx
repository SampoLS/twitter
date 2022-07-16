import { Fragment } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useGetPostsQuery } from "../../service/postsApi";
import Contents from "../home/components/Contents";
import PostTraits from "../home/components/PostTraits";

import { getImgSize } from "../../utils/getImgSize";

export default function Tweets() {
  const params = useParams();
  const { data: posts } = useGetPostsQuery("");
  let single: any;
  let width: string;
  let height: string;

  if (posts) {
    single = posts.filter((post: any) => post.userId === params.userId);
    const imgSize = getImgSize(single[0].imgUrl);
    width = imgSize!.width;
    height = imgSize!.height;
  }
  return (
    <Section>
      {posts ? (
        single.map((p: any) => {
          return (
            <Fragment key={p.id}>
              <Contents single={single[0]} width={width} height={height} />
              <PostTraits post={single[0]} />
            </Fragment>
          );
        })
      ) : (
        <div>that's all</div>
      )}
    </Section>
  );
}

const Section = styled.section`
  padding: 20px;
`;
