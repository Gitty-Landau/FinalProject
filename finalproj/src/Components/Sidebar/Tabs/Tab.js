import "./Tab.css";

function Tab(props) {
  return (
    <li
      className={props.classes}
      onClick={() => props.clickFunc(props.currentKey)}
    >
      {props.children}
      <span>{props.text}</span>
    </li>
  );
}
export default Tab;
