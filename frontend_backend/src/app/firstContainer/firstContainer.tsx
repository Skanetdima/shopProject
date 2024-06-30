import Link from "next/link";
import "./firstContainer.scss";

export const FirstContainer = () => {
  return (
    <div className="firstContainer">
      <div className="firstContainerItem">
        <span>New Arrival</span>
        <h1>
          Discover Our <br /> New Collection
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />{" "}
          elit tellus, luctus nec ullamcorper mattis.
        </p>
        <Link className="firstBuyNowBtn" href="/shop">
          buy now
        </Link>
      </div>
    </div>
  );
};
