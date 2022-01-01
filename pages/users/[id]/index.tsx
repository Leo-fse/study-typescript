import { SWRConfig } from "swr";
import { Header } from "../../../components/Header";
import { User } from "../../../components/User";

export const getServerSideProps = async (ctx: any) => {
  const { id } = ctx.query;
  // ユーザー情報の取得
  const USER_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`;
  const user = await fetch(USER_API_URL);
  const userData = await user.json();
  // ユーザの投稿の取得
  const POSTS_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/posts?userId=${userData.id}`;
  const posts = await fetch(POSTS_API_URL);
  const postsData = await posts.json();
  return {
    props: {
      fallback: {
        [USER_API_URL]: userData,
        [POSTS_API_URL]: postsData,
      },
    },
  };
};

const UserId = (props: any) => {
  const { fallback } = props;
  return (
    <SWRConfig value={{ fallback }}>
      <Header />
      <User />
    </SWRConfig>
  );
};

export default UserId;
