import Head from "next/head";
import Link from "next/link";
import { useFetch } from "../../hooks/useFetch";

export const UserNameByUserId = (props: { userId: number }) => {
  const user_url = props?.userId
    ? `${process.env.NEXT_PUBLIC_API_URL}/users/${props.userId}`
    : null;

  const { data, error, isLoading } = useFetch(user_url);

  if (isLoading) {
    <div>Loading...</div>;
  }
  if (error) {
    <div>{error.message}</div>;
  }
  return (
    <div>
      <Head>
        <title>{data?.name}</title>
      </Head>
      <div>
        <Link href={`/users/${data?.id}`}>
          <a className="hover:text-blue-500">
            <p className="text-lg">{`Created By ${data?.name}`}</p>
          </a>
        </Link>
      </div>
    </div>
  );
};
