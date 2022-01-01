import Head from "next/head";
import Link from "next/link";
import { useGet } from "../../hooks/useGet";

export const UserByUserId = (props: { userId: number }) => {
  const user_url = props?.userId
    ? `${process.env.NEXT_PUBLIC_API_URL}/users/${props.userId}`
    : null;

  const { data, error, isLoading, isEmpty } = useGet(user_url);

  return (
    <div>
      <Head>
        <title>{data?.name}</title>
      </Head>
      {error ? (
        <div>エラーが発生してデータが取得できていません</div>
      ) : isEmpty ? (
        <div>取得データが0件でした</div>
      ) : isLoading ? (
        <div>ローディング中</div>
      ) : (
        <div>
          <Link href={`/users/${data.id}`}>
            <a>
              <p className="text-red-600">{`Created By`}</p>
              <p className="pl-4">{`${data.name}`}</p>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};
