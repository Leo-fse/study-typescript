import Head from "next/head";
import { useRouter } from "next/router";
import { useGet } from "../../hooks/useGet";

export const Comment = () => {
  const router = useRouter();

  const commentId = router.query.id;
  const comment_url = commentId
    ? `${process.env.NEXT_PUBLIC_API_URL}/comments/${commentId}`
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
        <div>
          <h1 className="text-4xl">{data?.title}</h1>
          <p className="text-4xl">{data?.body}</p>
          <ol>
            <li>Created By {data?.name}</li>
            <li>E-mail {data?.email}</li>
          </ol>
        </div>
      )}
    </div>
  );
};
