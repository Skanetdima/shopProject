import { FirstContainer } from "./firstContainer/firstContainer";
import "./index.scss";
import HeaderComponent from "@/components/header/Header";
import { SecondContainer } from "./secondContainer/secondContainer";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <main>
        <FirstContainer />
        <SecondContainer />
      </main>
    </>
  );
}
