import "./History.css";
import Button from "../../../Button/Button";
import Trow from "./Trow/Trow";
function History(props) {
  return (
    <div class="box transaction-box">
      <div class="header-container">
        <h3 class="section-header">{props.HeaderText}</h3>
      </div>
      <table class="transaction-history">
        <tr>
          <th>{props.tableHeaderArr[0]}</th>
          <th>{props.tableHeaderArr[1]}</th>
          <th>{props.tableHeaderArr[2]}</th>
          <th>{props.tableHeaderArr[3]}</th>
        </tr>
        <Trow obj={props.donationsArr[0]}></Trow>
        <Trow obj={props.donationsArr[1]}></Trow>
        <Trow obj={props.donationsArr[2]}></Trow>
      </table>
      <div class="footer-container ">
        <Button text="See More..."></Button>
      </div>
    </div>
  );
}
export default History;
