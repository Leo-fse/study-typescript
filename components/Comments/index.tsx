import Link from "next/link";
import { useGet } from "../../hooks/useGet";

type comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

const users_url = "http://jsonplaceholder.typicode.com/comments/";

export const CommentsComponent = () => {
  const { data, error, isLoading, isEmpty } = useGet(users_url);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (isEmpty) {
    return <p>No comments found.</p>;
  }

  return (
    <div>
      <p className="text-4xl">COMMENTS PAGE</p>
      <ol>
        {data?.map((item: comment, index: number) => {
          return (
            <li key={item.id}>
              <Link href={`comments/${item.id}`}>
                <a>{`${index + 1}. ${item.body}`}</a>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
