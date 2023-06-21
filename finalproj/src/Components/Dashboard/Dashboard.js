import "./Dashboard.css";
import Header from "./Header/Header";
import MainDashBoard from "./MainAreas/MainDashboard/MainDashboard";
import Inbox from "./MainAreas/Inbox/Inbox";
import Donations from "./MainAreas/Donations/Donations";
function Dashboard(props) {
  const ComponentArray = [
    <MainDashBoard></MainDashBoard>,
    <Inbox></Inbox>,
    <Donations></Donations>,
  ];
  return (
    <main class="main-content">
      <Header></Header>
      {ComponentArray[props.displayTab]}
    </main>
  );
}

export default Dashboard;
