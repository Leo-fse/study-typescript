import Link from "next/link";
import { useFetchArray } from "../../hooks/useFetchArray";

type post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const url_posts = `${process.env.NEXT_PUBLIC_API_URL}/posts`;

export const PostList = () => {
  const { data, error, isLoading, isEmpty } = useFetchArray(url_posts);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (isEmpty) {
    return <p>No Posts found.</p>;
  }
  return (
    <div>
      <ul className="space-y-4">
        {data?.map((post: post, index: number) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <a className="block group">
                  <h1 className="text-xl font-bold group-hover:text-blue-500">{`${post.title}`}</h1>
                  <p className="text-lg text-gray-500 group-hover:text-blue-400">{`${post.body}`}</p>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
