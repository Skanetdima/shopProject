import { FirstShopContainer } from "@/app/firstShopContainer/firstShopContainer";
import Head from "next/head";

const Shop: React.FC = () => {
  return (
    <>
      <Head>
        <title>Shop</title>
      </Head>
      <main>
        <FirstShopContainer />
      </main>
    </>
  );
};

export default Shop;
