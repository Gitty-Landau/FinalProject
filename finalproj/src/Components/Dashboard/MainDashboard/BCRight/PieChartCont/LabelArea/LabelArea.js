import "./LabelArea.css";
import Label from "./Label/Label";
function LabelArea() {
  const labels = [
    { category: "Hachnasas Kallah", amt: "$8,000.00", index: "first" },
    { category: "Helping the Poor", amt: "$2,130.00", index: "second" },
    { category: "Medical Institutions", amt: "$1,510.00", index: "third" },
    { category: "Torah Institutions", amt: "$2,245.00", index: "fourth" },
  ];
  return (
    <div class="pie-chart__labels">
      {labels.map(function (label) {
        return (
          <Label
            labelColorClass={`label__color ${label.index}`}
            category={label.category}
            amt={label.amt}
          ></Label>
        );
      })}
    </div>
  );
}

export default LabelArea;
