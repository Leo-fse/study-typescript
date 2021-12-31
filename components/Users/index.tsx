import Link from "next/link";
import { useGet } from "../../hooks/useGet";

type user = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: number; lng: number };
  };
};
const users_url = "http://jsonplaceholder.typicode.com/users/";

export const UsersComponet = () => {
  const { data, error, isLoading, isEmpty } = useGet(users_url);
  if (isLoading) {
    return <p>...Loading</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (isEmpty) {
    return <p>No users found.</p>;
  }
  return (
    <div>
      <p className="text-4xl">USERS PAGE</p>
      <ol>
        {data?.map((item: user, index: number) => {
          return (
            <li key={item.id}>
              <Link href={`/users/${item.id}`}>
                <a>{`${index + 1}. ${item.name}(${item.email})`}</a>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
