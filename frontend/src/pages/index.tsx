import { FirstContainer } from "../app/firstContainer/firstContainer";
import { SecondContainer } from "../app/secondContainer/secondContainer";
import { ThirdContainer } from "../app/thirdContainer/thirdContainer";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        <FirstContainer />
        <SecondContainer />
        <ThirdContainer />
      </main>
    </>
  );
};

export default Home;
