import { useRouter } from "next/router";

const PostId = () => {
  const router = useRouter();
  console.log(router.query.id);
  return <div>{router.query.id}</div>;
};

export default PostId;
