import "./Label.css";

function Label(props) {
  return (
    <div class="pie-chart__labels-item">
      <div class="label">
        <div class={props.labelColorClass}></div>
        {props.category}
      </div>
      {props.amt}
    </div>
  );
}
export default Label;
