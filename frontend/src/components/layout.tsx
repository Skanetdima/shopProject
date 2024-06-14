import { Poppins } from "next/font/google";
import "../app/styles/reset.css";
import HeaderComponent from "@/components/header/Header";
import Head from "next/head";
import { FooterComponent } from "./footer/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>My Application</title>
        <meta name="description" content="Default description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <HeaderComponent />
      <div className={poppins.className}>{children}</div>
      <FooterComponent />
    </>
  );
};

export default RootLayout;
