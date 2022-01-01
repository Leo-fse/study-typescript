import { NextPage } from "next";
import { Header } from "../../components/Header";
import { UsersComponet } from "../../components/Users";

const Users: NextPage = () => {
  return (
    <div>
      <Header />
      <UsersComponet />
    </div>
  );
};

export default Users;
