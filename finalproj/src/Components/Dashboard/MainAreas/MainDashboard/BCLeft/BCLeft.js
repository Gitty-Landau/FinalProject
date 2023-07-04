import "./BCLeft.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faCircleDollarToSlot,
} from "@fortawesome/free-solid-svg-icons";
import TotalContainer from "./TotalContainer/TotalContainer";
import History from "./History/History";
function BCLeft(props) {
  return (
    <div class="bottom-container__left">
      <TotalContainer></TotalContainer>

      <History
        headerText={"Donation History"}
        tableHeaderArr={props.donationHeaderArr}
        donationsArr={props.donationsArr}
        icon={faCircleDollarToSlot}
        type="donations"
      ></History>
      <History
        headerText={"Income History"}
        tableHeaderArr={props.incomeHeaderArr}
        donationsArr={props.paymentArr}
        icon={faArrowTrendUp}
        type="income"
      ></History>
    </div>
  );
}

export default BCLeft;
