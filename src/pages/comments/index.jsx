import { SWRConfig } from "swr";
import { CommentList } from "../../components/Comment/CommentList";

export const getStaticProps = async () => {
  const COMMENTS_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/comments`;
  const comments = await fetch(COMMENTS_API_URL);
  const commentsData = await comments.json();

  return {
    props: {
      fallback: {
        [COMMENTS_API_URL]: commentsData,
      },
    },
    revalidate: 1,
  };
};

const Comments = (props) => {
  const { fallback } = props;
  return (
    <SWRConfig value={{ fallback }}>
      <CommentList />
    </SWRConfig>
  );
};

export default Comments;
