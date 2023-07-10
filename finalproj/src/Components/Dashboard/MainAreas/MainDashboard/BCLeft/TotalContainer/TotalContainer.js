import "./TotalContainer.css";
import Total from "../../Total/Total";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";
function TotalContainer(props) {
  return (
    <div class="box total-box">
      <Total
        boxWrapperClass={"total-box__left"}
        headerText={"Total Income"}
        icon={<FontAwesomeIcon icon={faDollarSign} size={"2xl"} />}
        amount={props.totalIncome}
        bottomText={
          <p>
            <span class="percentage-increase">20%</span> increase compared to
            last year
          </p>
        }
      ></Total>
      <Total
        boxWrapperClass={"total-box__right"}
        headerText={"Total Donations"}
        icon={<FontAwesomeIcon icon={faHandHoldingHeart} size={"2xl"} />}
        amount={props.totalDonations}
        bottomText={
          <p>
            <span class="percentage-decrease">10%</span> decrease compared to
            last year
          </p>
        }
      ></Total>
    </div>
  );
}

export default TotalContainer;
