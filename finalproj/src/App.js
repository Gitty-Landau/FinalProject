import "./App.css";

import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Components/Dashboard/Dashboard";
import { useState } from "react";

function App() {
  const [selectedTab, updateSelectedTab] = useState(0);
  const [activeKey, updateActiveKey] = useState(0);

  console.log(selectedTab);
  return (
    <div class="container">
      <Sidebar
        activeKey={activeKey}
        updateActiveKey={updateActiveKey}
        tabFunc={updateSelectedTab}
      ></Sidebar>
      <Dashboard
        updateActiveKey={updateActiveKey}
        tabFunc={updateSelectedTab}
        displayTab={selectedTab}
      ></Dashboard>
    </div>
  );
}

export default App;
