import type { NextPage } from "next";
import Link from "next/link";
import { useGet } from "../../hooks/useGet";

type post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const url_posts = "http://jsonplaceholder.typicode.com/posts";
const Posts: NextPage = () => {
  const { data } = useGet(url_posts);

  return (
    <div>
      <div className="text-4xl">POSTS PAGE</div>
      <ol>
        {data?.map((post: post) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Posts;
