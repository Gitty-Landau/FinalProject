import "./DateRange.css";
import Button from "../Components/Button/Button";
function DateRange() {
  return (
    <>
      <label for="startDate">For Dates Between:</label>
      <input type="date" id="startDate"></input>
      <input type="date"></input>
      <Button></Button>
    </>
  );
}
export default DateRange;
