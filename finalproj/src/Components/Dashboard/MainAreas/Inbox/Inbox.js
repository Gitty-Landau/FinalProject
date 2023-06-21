import "./Inbox.js";
import History from "../MainDashboard/BCLeft/History/History.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faCircleDollarToSlot,
} from "@fortawesome/free-solid-svg-icons";
function Inbox() {
  //Income
  const incomeHeaderArr = ["Company", "Date", "Amount", "Exempt from Ma'aser"];

  const payment1 = {
    company: "Compuskills",
    date: "Jan 01,2023",
    amount: "$2,000",
    category: "Yes",
  };

  const payment2 = {
    company: "NerTzaddik",
    date: "Jan 04,2023",
    amount: "$2,000",
    category: "No",
  };

  const payment3 = {
    company: "4UGifts",
    date: "Jan 06,2023",
    amount: "$2,000",
    category: "No",
  };
  const payments = [payment1, payment2, payment3];

  return (
    <div class="bottom-container">
      <div class="bottom-container__left">
        <History
          headerText={"Income History"}
          tableHeaderArr={incomeHeaderArr}
          donationsArr={payments}
          icon={<FontAwesomeIcon icon={faArrowTrendUp} />}
        ></History>
      </div>
    </div>
  );
}
export default Inbox;
