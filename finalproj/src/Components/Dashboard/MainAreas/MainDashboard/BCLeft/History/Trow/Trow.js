import "./Trow.css";

function Trow(props) {
  return (
    <tr>
      <td>
        {props.icon}
        {props.obj.company}
      </td>
      <td>{props.obj.date}</td>
      <td>{props.obj.amount}</td>
      <td>{props.obj.category}</td>
    </tr>
  );
}
export default Trow;
