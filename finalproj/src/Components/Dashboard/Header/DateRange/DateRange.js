import "./DateRange.css";
import Button from "../../Button/Button";
function DateRange() {
  return (
    <div class="user-nav">
      <div class="date">
        <div class="" dates>
          <form class="dates">
            For Dates Between:
            <input type="date" value="2023-01-01" required="required" />
            <input type="date" value="2023-01-01" required="required" />
            <Button text="Go"></Button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default DateRange;
