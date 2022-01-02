import Head from "next/head";
import { useRouter } from "next/router";
import { useFetch } from "../../hooks/useFetch";

export const SSRCommentDetail = () => {
  const router = useRouter();

  const commentId = router.query.id;
  const comment_url = commentId
    ? `${process.env.NEXT_PUBLIC_API_URL}/comments/${commentId}`
    : null;
  const { data, error, isLoading } = useFetch(comment_url);

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
        <div>
          <div className="text-lg">
            {data.name} ({data.email})
          </div>
          <h1 className="text-3xl font-bold">{data.body}</h1>
          {/* <h2 className="text-xl font-bold mt-10">元の記事</h2> */}
          {/* <div className="mt-2">
            <PostTitleByCommentId id={data.postId} />
          </div> */}
        </div>
      )}
    </div>
  );
};
