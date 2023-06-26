import "./Trow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
function Trow(props) {
  return (
    <tr>
      <td>
        <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
        {props.obj.company}
      </td>
      <td>{props.obj.date}</td>
      <td>{props.obj.amount}</td>
      <td>
        <FontAwesomeIcon
          className="point"
          size={"xs"}
          icon={faCircle}
          style={{ color: props.color }}
        />
        {props.obj.category}
      </td>
    </tr>
  );
}
export default Trow;
