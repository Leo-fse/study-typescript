import Head from "next/head";
import Link from "next/link";
import { useFetch } from "../../hooks/useFetch";
import { UserNameByUserId } from "../User/UserNameByUserId";

type comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export const PostTitleByCommentId = (props: { id: number }) => {
  const post_url = props.id
    ? `${process.env.NEXT_PUBLIC_API_URL}/posts/${props.id}`
    : null;
  const {
    data: post,
    error: postError,
    isLoading: postIsLoading,
  } = useFetch(post_url);

  return (
    <div>
      <Head>
        <title>{post?.title}</title>
      </Head>
      {postError ? (
        <div>エラーが発生してデータが取得できていません</div>
      ) : postIsLoading ? (
        <div>ローディング中</div>
      ) : (
        <Link href={`/posts/${post.id}`}>
          <a className="text-lg hover:text-blue-500">{post?.title}</a>
        </Link>
      )}
      <UserNameByUserId userId={post?.userId} />
    </div>
  );
};
