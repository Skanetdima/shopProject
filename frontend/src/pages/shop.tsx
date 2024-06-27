import { FirstShopContainer } from "@/app/firstShopContainer/firstShopContainer";
import Head from "next/head";
import { SecondFilterShopContainer } from "@/app/secondFilterShopContainer/secondFilterShopContainer";
import { ThirdShopContainer } from "@/app/thirdShopContainer/thirdShopContainer";

const Shop: React.FC = () => {
  return (
    <>
      <Head>
        <title>Shop</title>
      </Head>
      <main>
        <FirstShopContainer />
        <SecondFilterShopContainer />
        <ThirdShopContainer />
      </main>
    </>
  );
};

export default Shop;
