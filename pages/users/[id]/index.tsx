import { SWRConfig } from "swr";
import { Header } from "../../../components/Header";
import { User } from "../../../components/User";

export const getServerSideProps = async (ctx: any) => {
  const { id } = ctx.query;
  const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`;
  const user = await fetch(API_URL);
  const userData = await user.json();

  return {
    props: {
      fallback: {
        [API_URL]: userData,
      },
    },
  };
};

const UserId = (props: any) => {
  const { fallback } = props;
  return (
    <SWRConfig value={{ fallback }}>
      <Header />
      <User />
    </SWRConfig>
  );
};

export default UserId;
