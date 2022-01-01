import type { NextPage } from "next";
import { Header } from "../../components/Header";
import { PostsComponent } from "../../components/Posts";

const Posts: NextPage = () => {
  return (
    <div>
      <Header />
      <PostsComponent />
    </div>
  );
};

export default Posts;
