import Head from "next/head";
import { useRouter } from "next/router";
import { useGet } from "../../hooks/useGet";

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
          <p className="text-2xl">{data.name}</p>
          <ul>
            <li>{data.email}</li>
            <li>{data.username}</li>
            <li>{data.address.city}</li>
            <li>{data.phone}</li>
            <li>{data.website}</li>
            <li>{data.company.name}</li>
          </ul>
        </div>
      )}
    </div>
  );
};
