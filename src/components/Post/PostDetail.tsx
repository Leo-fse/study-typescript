import Head from "next/head";
import { useRouter } from "next/router";
import { useFetch } from "../../hooks/useFetch";
import { CommentListByPostId } from "../Comment/CommentListByPostId";
import { UserNameByUserId } from "../User/UserNameByUserId";

type comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export const PostDetail = () => {
  const router = useRouter();
  const postId: string | string[] | undefined = router.query.id;

  const post_url = postId
    ? `${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}`
    : null;
  const { data, error, isLoading } = useFetch(post_url);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div>
        <UserNameByUserId userId={data.userId} />
        <h1 className="text-3xl font-bold">{data.title}</h1>
        <p className="text-xl text-gray-900 mt-2">{data.body}</p>
        <h2 className="text-xl font-bold mt-10">コメント一覧</h2>
        <div className="mt-2">
          <CommentListByPostId postId={postId} />
        </div>
      </div>
    </div>
  );
};
