import "./LabelArea.css";
import Label from "./Label/Label";
function LabelArea() {
  return (
    <div class="pie-chart__labels">
      <Label
        labelColorClass="label__color first"
        category="Hachnasas Kallah"
        amt="$8,000.00"
      ></Label>
      <Label
        labelColorClass="label__color second"
        category="Helping the Poor"
        amt="$2,130.00"
      ></Label>
      <Label
        labelColorClass="label__color third"
        category="Medical Institutions"
        amt="$1,510.00"
      ></Label>
      <Label
        labelColorClass="label__color fourth"
        category="Torah Institutions"
        amt="$2,245.00"
      ></Label>
    </div>
  );
}

export default LabelArea;
