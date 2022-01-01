import Head from "next/head";
import { useGet } from "../../hooks/useGet";

export const UserByUserId = (props: { userId: number }) => {
  const user_url = props?.userId
    ? `${process.env.NEXT_PUBLIC_API_URL}/users/${props.userId}`
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
          <p className="text-xl">{`Created By ${data.name}`}</p>
          <ul>
            <li>{`E-mail : ${data.email}`}</li>
            <li>{`Phone : ${data.phone}`}</li>
          </ul>
        </div>
      )}
    </div>
  );
};
