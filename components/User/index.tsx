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
  console.log(data);

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
          <p className="text-2xl">{data.name}</p>
          <p className="text-xl">詳細</p>
          <ul>
            <li>{`E-mail : ${data.email}`}</li>
            <li>{`USERNAME : ${data.username}`}</li>
            <li>{`CITY : ${data.address.city}`}</li>
            <li>{`PHONE : ${data.phone}`}</li>
            <li>{`WEB : ${data.website}`}</li>
            <li>{`COMPANY : ${data.company.name}`}</li>
          </ul>
          <p className="text-xl">記事一覧</p>
          <PostByUserId id={data.id} />
        </div>
      )}
    </div>
  );
};
