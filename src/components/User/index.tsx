import Head from "next/head";
import { useRouter } from "next/router";
import { useGet } from "../../hooks/useGet";
import { PostByUserId } from "../Posts/PostsByUserId";

export const User = () => {
  const router = useRouter();
  const userId = router.query.id;

  const user_url = userId
    ? `${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`
    : null;
  const { data, error, isLoading, isEmpty } = useGet(user_url);

  return (
    <div>
      <Head>
        <title>{data?.title}</title>
      </Head>
      {error ? (
        <div>エラーが発生してデータが取得できていません</div>
      ) : isEmpty ? (
        <div>取得データが0件でした</div>
      ) : isLoading ? (
        <div>ローディング中</div>
      ) : (
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
            <PostByUserId id={data.id} />
          </div>
        </div>
      )}
    </div>
  );
};
