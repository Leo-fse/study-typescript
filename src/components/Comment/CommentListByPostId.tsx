import Head from "next/head";
import Link from "next/link";
import { useFetchArray } from "../../hooks/useFetchArray";

export const CommentListByPostId = (props: {
  postId: string | string[] | undefined;
}) => {
  const comment_url = props.postId
    ? `${process.env.NEXT_PUBLIC_API_URL}/posts/${props.postId}/comments`
    : null;
  const { data, error, isLoading } = useFetchArray(comment_url);

  return (
    <div>
      <Head>
        <title>{data?.title}</title>
      </Head>
      {error ? (
        <div>エラーが発生してデータが取得できていません</div>
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
