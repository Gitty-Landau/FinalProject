import "./Sidebar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLineChart,
  faHouse,
  faCircleDollarToSlot,
  faEnvelope,
  faGear,
  faArrowRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <div>
      <nav class="sidebar">
        <div class="sidebar__logo">
          <h2 class="sidebar__logo-header">The Ma'aser App</h2>
        </div>
        <ul class="side-nav">
          <li class="side-nav__item side-nav__item-active">
            <FontAwesomeIcon icon={faHouse} />
            <span>Dashboard</span>
          </li>
          <li class="side-nav__item">
            <FontAwesomeIcon icon={faLineChart} />
            <span>Income</span>
          </li>
          <li class="side-nav__item">
            <FontAwesomeIcon icon={faCircleDollarToSlot} />
            <span>Donations</span>
          </li>

          <li class="side-nav__item">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Inbox</span>
          </li>
          <li class="side-nav__item">
            <FontAwesomeIcon icon={faGear} />
            <span>Settings</span>
          </li>
        </ul>

        <ul class="side-nav">
          <li class="side-nav__item last-item">
            <FontAwesomeIcon icon={faArrowRotateLeft} />
            <span>Log Out</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
