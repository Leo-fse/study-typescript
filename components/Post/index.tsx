import Head from "next/head";
import { useRouter } from "next/router";
import { useGet } from "../../hooks/useGet";
import { CommentsByPostId } from "../Comments/CommentsByPostId";
import { Header } from "../Header";
import { UserByUserId } from "../User/UserByUserId";

type comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export const Post = () => {
  const router = useRouter();
  const postId = router.query.id;

  const post_url = postId
    ? `${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}`
    : null;
  const {
    data: post,
    error: postError,
    isLoading: postIsLoading,
    isEmpty: postIsEmpty,
  } = useGet(post_url);

  return (
    <div>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <Header />
      {postError ? (
        <div>エラーが発生してデータが取得できていません</div>
      ) : postIsEmpty ? (
        <div>取得データが0件でした</div>
      ) : postIsLoading ? (
        <div>ローディング中</div>
      ) : (
        <div>
          <UserByUserId userId={post?.userId} />
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="text-xl text-gray-900 mt-2">{post.body}</p>
          <h2 className="text-xl font-bold mt-10">コメント一覧</h2>
          <div className="mt-2">
            <CommentsByPostId postId={postId} />
          </div>
        </div>
      )}
    </div>
  );
};
