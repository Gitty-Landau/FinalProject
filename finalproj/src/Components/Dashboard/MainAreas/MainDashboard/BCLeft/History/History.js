import "./History.css";
import Button from "../../../../Button/Button";
import Trow from "./Trow/Trow";

function History(props) {
  const categories = {
    "Hachnasas Kallah": "#eb7ca6",
    "Helping the Poor": "#ffacc8",
    "Medical Institutions": "#cc6ff8",
    "Torah Institutions": "#7c5cfc",
  };

  return (
    <div class="box transaction-box">
      <div class="header-container">
        <h3 class="section-header">{props.headerText}</h3>
      </div>
      <table class="transaction-history">
        <tr>
          {props.tableHeaderArr.map(function (header) {
            return <th>{header}</th>;
          })}
        </tr>
        {props.donationsArr.map(function (donation) {
          return (
            <Trow
              icon={props.icon}
              color={
                props.type == "donations"
                  ? categories[donation.category]
                  : donation.category == "Yes"
                  ? "#ffacc8"
                  : "#a1a9fe"
              }
              obj={donation}
            ></Trow>
          );
        })}
      </table>
      <div class="footer-container ">
        <Button text="See More..."></Button>
      </div>
    </div>
  );
}
export default History;
