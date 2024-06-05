import { secondComponents } from "./data";
import "./secondContainer.scss";

export const SecondContainer = () => {
  const secondComponentsItems = secondComponents.map((obj, index) => {
    return (
      <li key={index}>
        <div
          style={{ background: `url(${obj.image}) no-repeat center/cover` }}
        ></div>
        <p>{obj.text}</p>
      </li>
    );
  });
  return (
    <div className="secondContainer">
      <h2>Browse The Range</h2>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      <ul>{secondComponentsItems}</ul>
    </div>
  );
};
