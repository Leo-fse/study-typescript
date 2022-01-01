import { SWRConfig } from "swr";
import { CommentsComponent } from "../../components/Comments";
import { Header } from "../../components/Header";

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
  };
};

const Comments = (props) => {
  const { fallback } = props;
  return (
    <SWRConfig value={{ fallback }}>
      <Header />
      <CommentsComponent />
    </SWRConfig>
  );
};

export default Comments;
