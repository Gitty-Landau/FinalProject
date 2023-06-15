import "./MainDashboard.css";
import BCLeft from "./BCLeft/BCLeft";
import BCRight from "./BCRight/BCRight";
function MainDashBoard() {
  return (
    <div class="bottom-container">
      <BCLeft></BCLeft>
      <BCRight></BCRight>
    </div>
  );
}

export default MainDashBoard;
