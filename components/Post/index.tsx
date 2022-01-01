import Head from "next/head";
import { useRouter } from "next/router";
import { useGet } from "../../hooks/useGet";
import { CommentsByPostId } from "../Comments/CommentsByPostId";
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
      <div className="text-4xl">Post Page</div>
      {postError ? (
        <div>エラーが発生してデータが取得できていません</div>
      ) : postIsEmpty ? (
        <div>取得データが0件でした</div>
      ) : postIsLoading ? (
        <div>ローディング中</div>
      ) : (
        <div>
          <p className="text-blue-600">Post Title</p>
          <p className="pl-4">{post.title}</p>
          <p className="text-blue-600">Post Body</p>
          <p className="pl-4">{post.body}</p>
        </div>
      )}
      <UserByUserId userId={post?.userId} />
      <p className="text-green-600">Comment</p>
      <CommentsByPostId postId={postId} />
    </div>
  );
};
