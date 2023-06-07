import "./Sidebar.css";

function Sidebar() {
  return (
    <nav class="sidebar">
      <div class="sidebar__logo">
        <h2 class="sidebar__logo-header">The Ma'aser App</h2>
      </div>
      <ul class="side-nav">
        <li class="side-nav__item side-nav__item-active">
          //
          <span>Dashboard</span>
        </li>
        <li class="side-nav__item">
          //
          <span>Income</span>
        </li>
        <li class="side-nav__item">
          //
          <span>Donations</span>
        </li>

        <li class="side-nav__item">
          //
          <span>Inbox</span>
        </li>
        <li class="side-nav__item">
          //
          <span>Settings</span>
        </li>
      </ul>

      <ul class="side-nav">
        <li class="side-nav__item last-item">
          //
          <span>Log Out</span>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
