import "./TopContainer.css";

function TopContainer() {
  return (
    <>
      <div class="date"></div>
      <div class="top-container">
        <div class="" dates>
          <form class="dates">
            For Dates Between:
            <input type="date" value="2023-01-01" required="required" />
            <input type="date" value="2023-01-01" required="required" />
            <button class="btn-purple submit-btn">Go</button>
          </form>
        </div>

        <div class="user-nav">
          <div class="user-info">
            //
            <span class="user-name">Leora Waldman</span>
            //
            <span>Log Out</span>
          </div>
          //
        </div>
      </div>
    </>
  );
}
export default TopContainer;
