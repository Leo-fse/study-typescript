import { NextPage } from "next";
import { SWRConfig } from "swr";
import { Header } from "../../components/Header";
import { UsersComponet } from "../../components/Users";

export const getServerSideProps = async () => {
  const USERS_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/users`;
  const users = await fetch(USERS_API_URL);
  const usersData = await users.json();
  return {
    props: {
      fallback: {
        [USERS_API_URL]: usersData,
      },
    },
  };
};

const Users: NextPage = (props) => {
  const { fallback } = props;
  return (
    <SWRConfig value={{ fallback }}>
      <Header />
      <UsersComponet />
    </SWRConfig>
  );
};

export default Users;
