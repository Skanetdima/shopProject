import { secondComponents } from "./data";

export const SecondContainer = () => {
  const secondComponentsItems = secondComponents.map((obj, index) => {
    return (
      <li key={index}>
        <div
          style={{ background: `url(${obj.image}) no-repeat center/contain` }}
        ></div>
      </li>
    );
  });
  return (
    <div className="secondContainer">
      <h2>Browse The Range</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <ul>{secondComponentsItems}</ul>
    </div>
  );
};
