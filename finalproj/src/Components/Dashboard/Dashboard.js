import "./Dashboard.css";
import Header from "./Header/Header";
import MainDashBoard from "./MainAreas/MainDashboard/MainDashboard";
import Income from "./MainAreas/Income/Income";
import Donations from "./MainAreas/Donations/Donations";
import { useState } from "react";
function Dashboard(props) {
  //Income
  const incomeHeaderArr = ["Company", "Date", "Amount", "Exempt from Ma'aser"];

  const payment1 = {
    company: "Compuskills",
    date: "Jan 01,2023",
    amount: "2,000",
    category: "Yes",
  };

  const payment2 = {
    company: "NerTzaddik",
    date: "Jan 04,2023",
    amount: "2,000",
    category: "No",
  };

  const payment3 = {
    company: "4UGifts",
    date: "Jan 06,2023",
    amount: "2,000",
    category: "No",
  };
  const donationHeaderArr = ["Donations", "Date", "Amount", "Category"];

  const donation1 = {
    company: "Yad Eliezer",
    date: "Jan 01, 2023",
    amount: "2,000",
    category: "Helping the Poor",
  };
  const donation2 = {
    company: "Kollel Kever Rachel",
    date: "Jan 04,2022",
    amount: "2,000",
    category: "Torah Institutions",
  };
  const donation3 = {
    company: "Likrat Kallah",
    date: "Jan 06,2023",
    amount: "2,000",
    category: "Hachnasas Kallah",
  };
  const [payments, updatePayments] = useState([payment1, payment2, payment3]);
  const [donations, updateDonations] = useState([
    donation1,
    donation2,
    donation3,
  ]);

  const ComponentArray = [
    <MainDashBoard
      paymentArr={payments}
      donationsArr={donations}
      incomeHeaderArr={incomeHeaderArr}
      donationHeaderArr={donationHeaderArr}
    ></MainDashBoard>,
    <Income
      headerArr={incomeHeaderArr}
      updateArrFunc={updatePayments}
      paymentArr={payments}
    ></Income>,
    <Donations
      headerArr={donationHeaderArr}
      updateArrFunc={updateDonations}
      paymentArr={donations}
    ></Donations>,
  ];
  return (
    <main class="main-content">
      <Header></Header>
      {ComponentArray[props.displayTab]}
    </main>
  );
}

export default Dashboard;
