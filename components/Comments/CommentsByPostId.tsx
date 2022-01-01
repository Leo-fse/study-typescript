import Head from "next/head";
import Link from "next/link";
import { useGet } from "../../hooks/useGet";

export const CommentsByPostId = (props: {
  postId: string | string[] | undefined;
}) => {
  const comment_url = props.postId
    ? `${process.env.NEXT_PUBLIC_API_URL}/comments/?postId=${props.postId}`
    : null;
  const { data, error, isLoading, isEmpty } = useGet(comment_url);

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
        <ul className="space-y-2">
          {data?.map(
            (
              item: { id: number; postId: number; name: string; body: string },
              index: number
            ) => {
              return (
                <li key={item.id} className="border-b pb-2">
                  <Link href={`/comments/${item.id}`}>
                    <a className="block hover:text-blue-500">
                      {`${item.body}`}
                    </a>
                  </Link>
                </li>
              );
            }
          )}
        </ul>
      )}
    </div>
  );
};
