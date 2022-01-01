import Head from "next/head";
import { useGet } from "../../hooks/useGet";

export const CommentsByPostId = (props: any) => {
  const comment_url = props.postId
    ? `${process.env.NEXT_PUBLIC_API_URL}/comments/?postId=${props.postId}`
    : null;
  const { data, error, isLoading, isEmpty } = useGet(comment_url);

  return (
    <div>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <p className="text-2xl">Comments</p>
      {error ? (
        <div>エラーが発生してデータが取得できていません</div>
      ) : isEmpty ? (
        <div>取得データが0件でした</div>
      ) : isLoading ? (
        <div>ローディング中</div>
      ) : (
        data?.map((item: { id: number; name: string }, index: number) => {
          return (
            <div key={item.id}>
              <ol>
                <li>{`${index + 1}. ${item?.name}`}</li>
              </ol>
            </div>
          );
        })
      )}
    </div>
  );
};
