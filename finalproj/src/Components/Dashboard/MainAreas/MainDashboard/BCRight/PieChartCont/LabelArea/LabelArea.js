import "./LabelArea.css";
import Label from "./Label/Label";
function LabelArea(props) {
  return (
    <div class="pie-chart__labels">
      {props.categoryArr.map(function (label) {
        return (
          <Label
            labelColorClass={`label__color ${props.categoryArr.index}`}
            category={props.categoryArr.category}
            amt={props.categoryArr.amt}
          ></Label>
        );
      })}
    </div>
  );
}

export default LabelArea;
