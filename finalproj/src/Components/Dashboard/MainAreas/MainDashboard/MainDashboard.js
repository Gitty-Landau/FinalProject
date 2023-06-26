import "./MainDashboard.css";
import BCLeft from "./BCLeft/BCLeft";
import BCRight from "./BCRight/BCRight";
function MainDashBoard(props) {
  return (
    <div class="bottom-container">
      <BCLeft
        paymentArr={props.paymentArr}
        donationsArr={props.donationsArr}
        incomeHeaderArr={props.incomeHeaderArr}
        donationHeaderArr={props.donationHeaderArr}
      ></BCLeft>
      <BCRight></BCRight>
    </div>
  );
}

export default MainDashBoard;
