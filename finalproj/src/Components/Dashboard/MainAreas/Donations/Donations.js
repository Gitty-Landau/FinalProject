import "./Donations.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faCircleDollarToSlot,
} from "@fortawesome/free-solid-svg-icons";
import History from "../MainDashboard/BCLeft/History/History";
function Donations() {
  const donationHeaderArr = ["Donations", "Date", "Amount", "Category"];

  const donation1 = {
    company: "Yad Eliezer",
    date: "Jan 01, 2023",
    amount: "$2,000",
    category: "Helping the Poor",
  };
  const donation2 = {
    company: "Kollel Kever Rachel",
    date: "Jan 04,2022",
    amount: "$2,000",
    category: "Torah Institutions",
  };
  const donation3 = {
    company: "Likrat Kallah",
    date: "Jan 06,2023",
    amount: "$2,000",
    category: "Hachnasas Kallah",
  };
  const donations = [donation1, donation2, donation3];
  return (
    <div class="bottom-container">
      <div class="bottom-container__left">
        <History
          headerText={"Donation History"}
          tableHeaderArr={donationHeaderArr}
          donationsArr={donations}
          icon={<FontAwesomeIcon icon={faCircleDollarToSlot} />}
        ></History>
      </div>
    </div>
  );
}
export default Donations;
