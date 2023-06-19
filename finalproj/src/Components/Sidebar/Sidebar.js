import "./Sidebar.css";
import Tab from "./Tabs/Tab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLineChart,
  faHouse,
  faCircleDollarToSlot,
  faEnvelope,
  faGear,
  faArrowRotateLeft,
  faRotate,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Sidebar() {
  const [isActive, updateActive] = useState(false);
  const tabs = [
    { text: "Dashboard", icon: faHouse },
    { text: "Income", icon: faLineChart },
    { text: "Donations", icon: faCircleDollarToSlot },
    { text: "Inbox", icon: faEnvelope },
    { text: "Settings", icon: faGear },
    { text: "Log Out", icon: faRotateLeft },
  ];
  return (
    <div>
      <nav class="sidebar">
        <div class="sidebar__logo">
          <h2 class="sidebar__logo-header">The Ma'aser App</h2>
        </div>
        <ul class="side-nav">
          {tabs.map(function (tab) {
            return (
              <Tab text={tab.text}>
                <FontAwesomeIcon icon={tab.icon} />
              </Tab>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
