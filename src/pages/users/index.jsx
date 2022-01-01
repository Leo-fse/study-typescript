import { SWRConfig } from "swr";
import { UserList } from "../../components/User/UserList";

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

const Users = (props) => {
  const { fallback } = props;
  return (
    <SWRConfig value={{ fallback }}>
      <UserList />
    </SWRConfig>
  );
};

export default Users;
