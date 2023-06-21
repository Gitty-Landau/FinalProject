import "./BCRight.css";
import Total from "../Total/Total";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../Button/Button";
import PieChartCont from "./PieChartCont/PieChartCont";
function BCRight() {
  return (
    <div class="bottom-container__right">
      <Total
        boxWrapperClass={"box"}
        headerText={"Your Ma'aser Balance"}
        amount={"$7823"}
        bottomText={"From Jan 01, 2023 to May 24, 2023"}
        button={
          <Button text="Donate">
            <FontAwesomeIcon icon={faCircleDollarToSlot} />
          </Button>
        }
      ></Total>
      <PieChartCont></PieChartCont>
    </div>
  );
}
export default BCRight;
