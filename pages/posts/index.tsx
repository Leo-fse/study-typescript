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
const About: NextPage = () => {
  const { data } = useGet(url_posts);

  return (
    <div>
      <h1 className="text-8xl">ABOUT PAGE</h1>
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

export default About;
