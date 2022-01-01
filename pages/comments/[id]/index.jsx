import { SWRConfig } from "swr";
import { Comment } from "../../../components/Comment";

export const getStaticPaths = async () => {
  const comments = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comments?_limit=10`)
  const commentsData = await comments.json()
  const paths = commentsData.map((comment) => ({
    params: {id: comment.id.toString()},
  }))
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const COMMENT_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);
  if (!comment.ok) {
    return {
      notFound:true
    }
  }
  
  const commentData = await comment.json();

  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: commentData,
      },
    },
  };
};

const CommentId = (props) => {
  const { fallback } = props;

  return (
    <SWRConfig value={{ fallback }}>
      <Comment />
    </SWRConfig>
  );
};

export default CommentId;
