import { FourthContainer } from "@/app/fourthContainer/fourthContainer";
import { FirstContainer } from "../app/firstContainer/firstContainer";
import { SecondContainer } from "../app/secondContainer/secondContainer";
import { ThirdContainer } from "../app/thirdContainer/thirdContainer";
import Head from "next/head";
import { FifthContainer } from "@/app/fifthContainer/fifthContainer";

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
        <FourthContainer />
        <FifthContainer />
      </main>
    </>
  );
};

export default Home;
