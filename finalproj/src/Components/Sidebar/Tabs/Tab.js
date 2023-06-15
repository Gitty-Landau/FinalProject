import "./Tab.css";
import { useState } from "react";
function Tab(props) {
  const [isActive, updateActive] = useState(false);
  return (
    <li
      class={
        isActive ? "side-nav__item" : "side-nav__item .side-nav__item-active "
      }
    >
      {props.children}
      <span>{props.text}</span>
    </li>
  );
}
export default Tab;
