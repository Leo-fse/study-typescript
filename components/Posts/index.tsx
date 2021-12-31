import Link from "next/link";
import { useGet } from "../../hooks/useGet";

type post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const url_posts = `${process.env.NEXT_PUBLIC_API_URL}/posts`;

export const PostsComponent = () => {
  const { data, error, isLoading, isEmpty } = useGet(url_posts);

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
      <p className="text-4xl">POSTS PAGE</p>
      <ol>
        {data?.map((post: post, index: number) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <a>{`${index + 1}. ${post.title}`}</a>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
