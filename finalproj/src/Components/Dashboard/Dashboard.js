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
    key: 0,
    company: "Compuskills",
    date: "Jan 01,2023",
    amount: 2000,
    category: "Yes",
  };

  const payment2 = {
    key: 1,
    company: "NerTzaddik",
    date: "Jan 04,2023",
    amount: 2000,
    category: "No",
  };

  const payment3 = {
    key: 2,
    company: "4UGifts",
    date: "Jan 06,2023",
    amount: 2000,
    category: "No",
  };
  const donationHeaderArr = ["Donations", "Date", "Amount", "Category"];

  const donation1 = {
    key: 0,
    company: "Yad Eliezer",
    date: "Jan 01, 2023",
    amount: 2000,
    category: "Helping the Poor",
  };
  const donation2 = {
    key: 1,
    company: "Kollel Kever Rachel",
    date: "Jan 04,2022",
    amount: 2000,
    category: "Torah Institutions",
  };
  const donation3 = {
    key: 2,
    company: "Likrat Kallah",
    date: "Jan 06,2023",
    amount: 2000,
    category: "Hachnasas Kallah",
  };
  const [payments, updatePayments] = useState([payment1, payment2, payment3]);
  const [donations, updateDonations] = useState([
    { ...donation1, key: 0 },
    { ...donation2, key: 1 },
    { ...donation3, key: 2 },
  ]);

  const labels = [
    {
      category: "Hachnasas Kallah",
      amt: "$8,000.00",
      index: "first",
      color: "#eb7ca6",
    },
    {
      category: "Helping the Poor",
      amt: "$2,130.00",
      index: "second",
      color: "#ffacc8",
    },
    {
      category: "Medical Institutions",
      amt: "$1,510.00",
      index: "third",
      color: "#cc6ff8",
    },
    {
      category: "Torah Institutions",
      amt: "$2,245.00",
      index: "fourth",
      color: "#7c5cfc",
    },
  ];
  function AddPayment(obj) {
    updatePayments(obj);
    updatePayments(function (prev) {
      return prev.map(function (item, index) {
        return { ...item, key: index };
      });
    });
  }
  function AddDonation(obj) {
    updateDonations(obj);
    updateDonations(function (prev) {
      return prev.map(function (item, index) {
        return { ...item, key: index };
      });
    });
  }
  function DeletePayment(obj) {
    updatePayments(function (prev) {
      return prev.filter(function (item) {
        return item.key != obj.key;
      });
    });
  }
  function DeleteDonation(obj) {
    updateDonations(function (prev) {
      return prev.filter(function (item) {
        return item.key != obj.key;
      });
    });
  }

  console.log(donations);
  const ComponentArray = [
    <MainDashBoard
      tabFunc={props.tabFunc}
      categoryArr={labels}
      paymentArr={payments}
      donationsArr={donations}
      incomeHeaderArr={incomeHeaderArr}
      donationHeaderArr={donationHeaderArr}
      updateActiveKey={props.updateActiveKey}
    ></MainDashBoard>,
    <Income
      headerArr={incomeHeaderArr}
      updateArrFunc={AddPayment}
      paymentArr={payments}
      deleteFunc={DeletePayment}
    ></Income>,
    <Donations
      categoryArr={labels}
      headerArr={donationHeaderArr}
      updateArrFunc={AddDonation}
      donationsArr={donations}
      deleteFunc={DeleteDonation}
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
