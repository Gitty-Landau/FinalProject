import "./Dashboard.css";
import Header from "./Header/Header";
import MainDashBoard from "./MainDashboard/MainDashboard";
function Dashboard() {
  return (
    <main class="main-content">
      <Header></Header>
      <MainDashBoard></MainDashBoard>
    </main>
  );
}

export default Dashboard;
