import type { NextPage } from "next";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <Header></Header>
      <p className="text-4xl">Nextjsで学ぶReact講座</p>
      <p>JSONPlaceholderのAPIを色々叩いてみるよ</p>
    </div>
  );
};

export default Home;
