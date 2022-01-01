import { NextPage } from "next";
import { CommentsComponent } from "../../components/Comments";
import { Header } from "../../components/Header";

const Comments: NextPage = () => {
  return (
    <div>
      <Header />
      <CommentsComponent />
    </div>
  );
};

export default Comments;
