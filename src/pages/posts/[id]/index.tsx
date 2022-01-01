import { NextPage } from "next";
import { Post } from "../../../components/Post";

const PostId: NextPage = () => {
  return (
    <div className="w-[600px] min-h-screen px-0 py-2 flex flex-col items-center">
      <Post />
    </div>
  );
};

export default PostId;
