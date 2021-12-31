import Head from "next/head";
import { useRouter } from "next/router";
import { useGet } from "../../hooks/useGet";

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

  const user_url = post?.userId
    ? `${process.env.NEXT_PUBLIC_API_URL}/users/${post.userId}`
    : null;
  const {
    data: user,
    error: userError,
    isLoading: userIsLoading,
    isEmpty: userIsEmpty,
  } = useGet(user_url);

  const comments_url = postId
    ? `${process.env.NEXT_PUBLIC_API_URL}/comments?postId=${postId}`
    : null;
  const {
    data: comments,
    error: commentsError,
    isLoading: commentsIsLoading,
    isEmpty: commentsIsEmpty,
  } = useGet(comments_url);

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
      <div className="text-8xl">Comments</div>
      {commentsError ? (
        <div>エラーが発生してデータが取得できていません</div>
      ) : commentsIsEmpty ? (
        <div>取得データが0件でした</div>
      ) : commentsIsLoading ? (
        <div>ローディング中</div>
      ) : (
        <div>
          {comments.map((item: comment, index: number) => {
            return (
              <ol key={index}>
                <li>{`${index + 1}. ${item.body}`}</li>
              </ol>
            );
          })}
        </div>
      )}
    </div>
  );
};
