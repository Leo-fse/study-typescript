import { SWRConfig } from "swr";
import { SSRCommentList } from "../../components/SSRComment/SSRCommentList";

export const getServerSideProps = async () => {
  const COMMENTS_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/comments`;
  const comments = await fetch(COMMENTS_API_URL);
  const commentsData = await comments.json();

  return {
    props: {
      fallback: {
        [COMMENTS_API_URL]: commentsData,
      },
    },
  };
};

const Comments = (props) => {
  const { fallback } = props;
  console.log(fallback);
  return (
    <SWRConfig value={{ fallback }}>
      <SSRCommentList />
    </SWRConfig>
  );
};

export default Comments;
