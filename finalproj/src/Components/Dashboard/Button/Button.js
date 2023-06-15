import "./Button.css";

function Button(props) {
  return (
    <button class="btn-purple submit-btn">
      <span>{props.children}</span>
      {props.text}
    </button>
  );
}

export default Button;
