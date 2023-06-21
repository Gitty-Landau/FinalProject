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
function Sidebar(props) {
  const [activeKey, updateActiveKey] = useState(0);
  const tabs = [
    { text: "Dashboard", icon: faHouse, key: 0 },
    { text: "Income", icon: faLineChart, key: 1 },
    { text: "Donations", icon: faCircleDollarToSlot, key: 2 },
    { text: "Inbox", icon: faEnvelope, key: 3 },
    { text: "Settings", icon: faGear, key: 4 },
    { text: "Log Out", icon: faRotateLeft, key: 5 },
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
              <Tab
                tabFunc={props.tabFunc}
                text={tab.text}
                currentKey={tab.key}
                clickFunc={updateActiveKey}
                classes={
                  tab.key == activeKey
                    ? "side-nav__item side-nav__item-active"
                    : "side-nav__item"
                }
              >
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
