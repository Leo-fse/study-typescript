import Link from "next/link";
import { useFetchArray } from "../../hooks/useFetchArray";

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
const users_url = `${process.env.NEXT_PUBLIC_API_URL}/users/`;

export const UserList = () => {
  const { data, error, isLoading, isEmpty } = useFetchArray(users_url);
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
      <ul className="grid grid-cols-2 gap-6">
        {data?.map((item: user, index: number) => {
          return (
            <li key={item.id}>
              <Link href={`/users/${item.id}`}>
                <a className="block p-4 shadow rounded hover:bg-gray-200">
                  <h1 className="text-xl font-bold truncate">{item.name}</h1>
                  <div className="text-lg truncate">{item.email}</div>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
