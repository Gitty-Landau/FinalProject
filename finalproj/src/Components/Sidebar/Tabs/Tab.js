import "./Tab.css";

function Tab(props) {
  function clickHandler() {
    props.tabFunc(props.currentKey);
    props.clickFunc(props.currentKey);
  }
  return (
    <li className={props.classes} onClick={clickHandler}>
      {props.children}
      <span>{props.text}</span>
    </li>
  );
}
export default Tab;
