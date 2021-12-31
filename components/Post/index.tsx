import Head from "next/head";
import { useRouter } from "next/router";
import { useGet } from "../../hooks/useGet";

export const Post = () => {
  const router = useRouter();
  const postId = router.query.id;
  const post_url = postId
    ? `http://jsonplaceholder.typicode.com/posts/${postId}`
    : null;
  const {
    data: post,
    error: postError,
    isLoading: postIsLoading,
    isEmpty: postIsEmpty,
  } = useGet(post_url);

  const user_url = post?.userId
    ? `http://jsonplaceholder.typicode.com/users/${post.userId}`
    : null;

  const {
    data: user,
    error: userError,
    isLoading: userIsLoading,
    isEmpty: userIsEmpty,
  } = useGet(user_url);

  return (
    <div>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <div className="text-8xl">Post</div>
      {postError ? (
        <div>エラーが発生してデータが取得できていません</div>
      ) : postIsEmpty ? (
        <div>取得データが0件でした</div>
      ) : postIsLoading ? (
        <div>ローディング中</div>
      ) : (
        <div>
          <h1 className="text-4xl">{post?.title}</h1>
          <p>{post?.body}</p>
        </div>
      )}
      <div className="text-8xl">USER</div>

      {userError ? (
        <div>エラーが発生してデータが取得できていません</div>
      ) : userIsEmpty ? (
        <div>取得データが0件でした</div>
      ) : userIsLoading ? (
        <div>ローディング中</div>
      ) : (
        <div>
          <h1 className="text-4xl">Created By {user?.name}</h1>
          <p>E-mail : {user?.email}</p>
          <p>Phone : {user?.phone}</p>
        </div>
      )}
    </div>
  );
};
