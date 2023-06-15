import "./Header.css";
import UserInfo from "./UserInfo/UserInfo";
import DateRange from "./DateRange/DateRange";
function Header() {
  return (
    <div class="top-container">
      <DateRange></DateRange>
      <UserInfo></UserInfo>
    </div>
  );
}
export default Header;
