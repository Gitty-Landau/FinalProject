import "./History.css";
import Button from "../../../../Button/Button";
import Trow from "./Trow/Trow";
import Donations from "../../../Donations/Donations";
import { useState } from "react";
function History(props) {
  const categories = {
    "Hachnasas Kallah": "#eb7ca6",
    "Helping the Poor": "#ffacc8",
    "Medical Institutions": "#cc6ff8",
    "Torah Institutions": "#7c5cfc",
  };

  function GetColor({ ...donation }) {
    if (props.type == "donations") {
      const donationObj = props.categoryArr.filter(function (item) {
        return item.category == donation.category;
      });
      return donationObj[0].color;
    } else {
      return donation.category == "Yes" ? "#ffacc8" : "#a1a9fe";
    }
  }

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
        {props.donationsArr.map(function (donation, index) {
          return (
            <Trow
              seeMoreButton={props.seeMoreButton}
              icon={props.icon}
              color={GetColor(donation)}
              obj={donation}
              deleteFunc={props.deleteFunc}
            ></Trow>
          );
        })}
      </table>
      {props.seeMoreButton ? (
        <div
          class="footer-container "
          onClick={function () {
            if (props.type == "income") {
              props.tabFunc(1);
              props.updateActiveKey(1);
            }
            if (props.type == "donations") {
              props.tabFunc(2);
              props.updateActiveKey(2);
            }
          }}
        >
          <Button text="See More..."></Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default History;
