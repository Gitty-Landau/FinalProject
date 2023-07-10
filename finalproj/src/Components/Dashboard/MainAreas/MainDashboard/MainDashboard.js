import "./MainDashboard.css";
import BCLeft from "./BCLeft/BCLeft";
import BCRight from "./BCRight/BCRight";
import { useState } from "react";
function MainDashBoard(props) {
  function calculateBalance() {
    return totalIncome * 0.1 - totalDonations;
  }
  function calculatePaymentSum() {
    const sum = props.paymentArr.reduce(function (total, val) {
      return total + val.amount;
    }, 0);
    return sum;
  }
  function calculateDonationsSum() {
    const sum = props.donationsArr.reduce(function (total, val) {
      return total + val.amount;
    }, 0);
    return sum;
  }
  const [totalIncome, updateTotalIncome] = useState(calculatePaymentSum());
  const [totalDonations, updateTotalDonations] = useState(
    calculateDonationsSum()
  );
  const [balance, updateBalance] = useState(calculateBalance());

  return (
    <div class="bottom-container">
      <BCLeft
        totalDonations={totalDonations}
        totalIncome={totalIncome}
        categoryArr={props.categoryArr}
        paymentArr={props.paymentArr}
        donationsArr={props.donationsArr}
        incomeHeaderArr={props.incomeHeaderArr}
        donationHeaderArr={props.donationHeaderArr}
        tabFunc={props.tabFunc}
        updateActiveKey={props.updateActiveKey}
      ></BCLeft>
      <BCRight categoryArr={props.categoryArr} balance={balance}></BCRight>
    </div>
  );
}

export default MainDashBoard;
