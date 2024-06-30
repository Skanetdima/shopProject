import { AppProps } from "next/app";
import RootLayout from "../components/layout";
import "../app/styles/reset.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}
