import "./Total.css";
import { useState } from "react";
function Total(props) {
  const [isClicked, updateIsClicked] = useState(false);
  return (
    <div class={props.boxWrapperClass}>
      <div class="header-container">
        <h3 class="section-header">{props.headerText}</h3>
        <div>{props.icon}</div>
      </div>
      <h1 class="price">
        ${props.amount}
        <span class="price-currency">(USD)</span>
      </h1>
      <p>{props.bottomText}</p>
      <div
        onClick={() =>
          updateIsClicked(function (prev) {
            return !prev;
          })
        }
        class="button-box"
      >
        <span>
          {props.button}
          {isClicked ? (
            <a href="https://www.jewishcharities.org/">click</a>
          ) : (
            ""
          )}
        </span>
      </div>
    </div>
  );
}

export default Total;
