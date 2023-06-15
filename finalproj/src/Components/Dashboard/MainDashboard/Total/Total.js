import "./Total.css";

function Total(props) {
  return (
    <div class={props.boxWrapperClass}>
      <div class="header-container">
        <h3 class="section-header">{props.headerText}</h3>
        <div>{props.icon}</div>
      </div>
      <h1 class="price">
        {props.amount}
        <span class="price-currency">(USD)</span>
      </h1>
      <p>{props.bottomText}</p>
      <div class="button-box">{props.button}</div>
    </div>
  );
}

export default Total;
