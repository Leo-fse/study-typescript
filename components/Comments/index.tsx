import Link from "next/link";
import { useGet } from "../../hooks/useGet";

type comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

const users_url = `${process.env.NEXT_PUBLIC_API_URL}/comments/`;

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
      <ul className="space-y-2">
        {data?.map((item: comment, index: number) => {
          return (
            <li key={item.id} className="border-b pb-2">
              <Link href={`comments/${item.id}`}>
                <a className="block hover:text-blue-500">{`${item.body}`}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
