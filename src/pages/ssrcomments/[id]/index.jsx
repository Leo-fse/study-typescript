import { SWRConfig } from "swr";
import { SSRCommentDetail } from "../../../components/SSRComment/SSRCommentDetail";

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.params;
  const COMMENT_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);
  if (!comment.ok) {
    return {
      notFound: true,
    };
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
      <SSRCommentDetail />
    </SWRConfig>
  );
};

export default CommentId;
