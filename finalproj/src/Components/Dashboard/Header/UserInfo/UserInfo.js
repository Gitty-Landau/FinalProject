import "./UserInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
function UserInfo() {
  return (
    <div class="user-info">
      <FontAwesomeIcon icon={faUser} />
      <span class="user-name">Leora Waldman</span>
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      <span>Log Out</span>
    </div>
  );
}

export default UserInfo;
