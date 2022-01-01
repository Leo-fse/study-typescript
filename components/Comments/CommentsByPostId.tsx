import Head from "next/head";
import Link from "next/link";
import { useGet } from "../../hooks/useGet";

export const CommentsByPostId = (props: { postId: number }) => {
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
        data?.map(
          (
            item: { id: number; postId: number; name: string; body: string },
            index: number
          ) => {
            return (
              <div key={item.id}>
                <ol>
                  <li>
                    <Link href={`/comments/${item.id}`}>
                      <a>{`${index + 1}. ${item.name}`}</a>
                    </Link>
                    <ol>
                      <li className="text-gray-600 pl-4">{`${item.body}`}</li>
                    </ol>
                  </li>
                </ol>
              </div>
            );
          }
        )
      )}
    </div>
  );
};
