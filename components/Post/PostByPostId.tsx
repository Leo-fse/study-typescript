import Head from "next/head";
import Link from "next/link";
import { useGet } from "../../hooks/useGet";
import { UserByUserId } from "../User/UserByUserId";

type comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export const PostByPostId = (props: { id: number }) => {
  const post_url = props.id
    ? `${process.env.NEXT_PUBLIC_API_URL}/posts/${props.id}`
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
      {postError ? (
        <div>エラーが発生してデータが取得できていません</div>
      ) : postIsEmpty ? (
        <div>取得データが0件でした</div>
      ) : postIsLoading ? (
        <div>ローディング中</div>
      ) : (
        <Link href={`/posts/${post.id}`}>
          <a className="text-lg hover:text-blue-500">{post?.title}</a>
        </Link>
      )}
      <UserByUserId userId={post?.userId} />
    </div>
  );
};
