import { FirstShopContainer } from "@/app/firstShopContainer/firstShopContainer";
import Head from "next/head";
import { SecondFilterShopContainer } from "@/app/secondFilterShopContainer/secondFilterShopContainer";

const Shop: React.FC = () => {
  return (
    <>
      <Head>
        <title>Shop</title>
      </Head>
      <main>
        <FirstShopContainer />
        <SecondFilterShopContainer />
      </main>
    </>
  );
};

export default Shop;
