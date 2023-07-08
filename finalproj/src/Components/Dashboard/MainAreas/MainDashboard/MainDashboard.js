import "./MainDashboard.css";
import BCLeft from "./BCLeft/BCLeft";
import BCRight from "./BCRight/BCRight";
function MainDashBoard(props) {
  return (
    <div class="bottom-container">
      <BCLeft
        categoryArr={props.categoryArr}
        paymentArr={props.paymentArr}
        donationsArr={props.donationsArr}
        incomeHeaderArr={props.incomeHeaderArr}
        donationHeaderArr={props.donationHeaderArr}
        tabFunc={props.tabFunc}
        updateActiveKey={props.updateActiveKey}
      ></BCLeft>
      <BCRight categoryArr={props.categoryArr}></BCRight>
    </div>
  );
}

export default MainDashBoard;
