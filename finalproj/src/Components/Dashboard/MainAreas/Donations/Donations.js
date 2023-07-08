import "./Donations.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "../Form/Form";
import {
  faArrowTrendUp,
  faCircleDollarToSlot,
} from "@fortawesome/free-solid-svg-icons";
import History from "../MainDashboard/BCLeft/History/History";
function Donations(props) {
  return (
    <div class="bottom-container">
      <div class="bottom-container__left">
        <History
          categoryArr={props.categoryArr}
          headerText={"Donation History"}
          tableHeaderArr={props.headerArr}
          donationsArr={props.donationsArr}
          icon={faCircleDollarToSlot}
          type="donations"
          seeMoreButton={false}
          deleteFunc={props.deleteFunc}
        ></History>
      </div>
      <div class="bottom-container__right">
        <Form
          categoryArr={props.categoryArr}
          updateArrFunc={props.updateArrFunc}
          donationsArr={props.donationsArr}
        ></Form>
      </div>
    </div>
  );
}
export default Donations;
