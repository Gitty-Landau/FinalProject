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
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Sidebar() {
  const [isActive, updateActive] = useState(false);
  return (
    <div>
      <nav class="sidebar">
        <div class="sidebar__logo">
          <h2 class="sidebar__logo-header">The Ma'aser App</h2>
        </div>
        <ul class="side-nav">
          <Tab text={"Dashboard"} className={"side-nav__item-active"}>
            <FontAwesomeIcon icon={faHouse} />
          </Tab>
          <Tab text={"Income"}>
            <FontAwesomeIcon icon={faLineChart} />
          </Tab>
          <Tab text={"Donations"}>
            <FontAwesomeIcon icon={faCircleDollarToSlot} />
          </Tab>
          <Tab text={"Inbox"}>
            <FontAwesomeIcon icon={faEnvelope} />
          </Tab>{" "}
          <Tab text={"Settings"}>
            <FontAwesomeIcon icon={faGear} />
          </Tab>{" "}
          <Tab text={"Log Out"}>
            <FontAwesomeIcon icon={faArrowRotateLeft} />
          </Tab>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
