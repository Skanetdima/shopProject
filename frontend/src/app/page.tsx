import { FirstContainer } from "./firstContainer/firstContainer";
import "./index.scss";
import HeaderComponent from "@/components/header/Header";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <main>
        <FirstContainer />
      </main>
    </>
  );
}
