import { thirdComponents } from "./data";
import "./thirdContainer.scss";

export const ThirdContainer = () => {
  const ulItems = thirdComponents.map((obj, index) => {
    return (
      <li key={index}>
        <div style={{ background: `url(${obj.img})` }}></div>
        <section>
          <h3>{obj.h3}</h3>
          <p>{obj.p}</p>
          <span>
            {obj.span} <s>{obj.spanOld}</s>
          </span>
        </section>
      </li>
    );
  });
  return (
    <div className="thirdContainer">
      <h2>Our Products</h2>
      <ul>{ulItems}</ul>
      <a href="#">Show More</a>
    </div>
  );
};
