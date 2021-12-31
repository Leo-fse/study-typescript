import type { NextPage } from "next";
import Link from "next/link";
import { usePosts } from "../hooks/usePosts";

type post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const About: NextPage = () => {
  const { data, error, isLoading, isEmpty } = usePosts();
  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (isEmpty) {
    return <div>データは空です</div>;
  }
  return (
    <ol>
      {data.map((post: post) => {
        return (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </li>
        );
      })}
    </ol>
  );
};

export default About;
