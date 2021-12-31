import { NextPage } from "next";
import { Comment } from "../../../components/Comment";

const CommentId: NextPage = () => {
  return (
    <div className="w-[600px] min-h-screen px-0 py-2 flex flex-col items-center">
      <Comment />
    </div>
  );
};

export default CommentId;
