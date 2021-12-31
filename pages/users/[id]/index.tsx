import { NextPage } from "next";
import { User } from "../../../components/User";

const UserId: NextPage = () => {
  return (
    <div className="w-[600px] min-h-screen px-0 py-2 flex flex-col items-center">
      <User />
    </div>
  );
};

export default UserId;
