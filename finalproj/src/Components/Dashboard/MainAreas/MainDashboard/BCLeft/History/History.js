import "./History.css";
import Button from "../../../../Button/Button";
import Trow from "./Trow/Trow";
function History(props) {
  return (
    <div class="box transaction-box">
      <div class="header-container">
        <h3 class="section-header">{props.HeaderText}</h3>
      </div>

      <table class="transaction-history">
        <tr>
          {props.tableHeaderArr.map(function (header) {
            return <th>{header}</th>;
          })}
        </tr>
        {props.donationsArr.map(function (donation) {
          return <Trow obj={donation}></Trow>;
        })}
      </table>
      <div class="footer-container ">
        <Button text="See More..."></Button>
      </div>
    </div>
  );
}
export default History;
