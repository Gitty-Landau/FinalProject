import "./BCLeft.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faCircleDollarToSlot,
} from "@fortawesome/free-solid-svg-icons";
import TotalContainer from "./TotalContainer/TotalContainer";
import History from "./History/History";
function BCLeft() {
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
    <div class="bottom-container__left">
      <TotalContainer></TotalContainer>
      <History
        headerText={"Donation History"}
        tableHeaderArr={donationHeaderArr}
        donationsArr={donations}
        icon={<FontAwesomeIcon icon={faCircleDollarToSlot} />}
      ></History>
      <History
        headerText={"Income History"}
        tableHeaderArr={incomeHeaderArr}
        donationsArr={payments}
        icon={<FontAwesomeIcon icon={faArrowTrendUp} />}
      ></History>
    </div>
  );
}

export default BCLeft;
