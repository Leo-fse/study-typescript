import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <p className="text-4xl">API確認用</p>
      <p>JSONPlaceholderのAPIで練習</p>

      <ul className="list-inside list-disc mt-2 text-xl">
        <li className="hover:text-blue-500">
          <Link href="/">
            <a>TOP</a>
          </Link>
        </li>
        <li className="hover:text-blue-500">
          <Link href="/posts">
            <a>POSTS</a>
          </Link>
        </li>
        <li className="hover:text-blue-500">
          <Link href="/users">
            <a>Users</a>
          </Link>
        </li>
        <li className="hover:text-blue-500">
          <Link href="/comments">
            <a>Comments</a>
          </Link>
        </li>
        <li className="hover:text-blue-500">
          <Link href="/ssrcomments">
            <a>SSRCommonents</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
