import type { NextPage } from "next";
import Head from "next/head";
import { PostList } from "../../components/Post/PostList";

const Posts: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Posts Page</title>
      </Head>
      <PostList />
    </div>
  );
};

export default Posts;
