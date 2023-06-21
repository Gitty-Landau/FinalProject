import "./Dashboard.css";
import Header from "./Header/Header";

function Dashboard(props) {
  const ComponentArray = [<Dashboard></Dashboard>];
  return (
    <main class="main-content">
      <Header></Header>
      {ComponentArray[props.displayTab]}
    </main>
  );
}

export default Dashboard;
