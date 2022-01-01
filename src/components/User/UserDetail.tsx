import Head from "next/head";
import { useRouter } from "next/router";
import { useFetch } from "../../hooks/useFetch";
import { PostListByUserId } from "../Post/PostListByUserId";

export const UserDetail = () => {
  const router = useRouter();
  const userId = router.query.id;

  const user_url = userId
    ? `${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`
    : null;
  const { data, error, isLoading } = useFetch(user_url);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <div>
        <h1 className="font-bold text-3xl">{data.name}</h1>
        <h2 className="text-xl font-bold mt-10">詳細</h2>
        <ul className="list-inside list-disc mt-2 text-xl">
          <li>{`アカウント名 : ${data.username}`}</li>
          <li>{`メール : ${data.email}`}</li>
          <li>{`電話番号 : ${data.phone}`}</li>
          <li>{`WEBサイト : ${data.website}`}</li>
          <li>{`住所 : ${data.address.city}`}</li>
          <li>{`勤務先 : ${data.company.name}`}</li>
        </ul>
        <p className="text-xl font-bold mt-2">投稿</p>
        <div className="mt-10">
          <PostListByUserId id={data.id} />
        </div>
      </div>
    </div>
  );
};
