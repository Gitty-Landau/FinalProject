import "./Button.css";

function Button(props) {
  return (
    <Button>
      <FontAwesomeIcon icon={props.icon} />
      <div>props.text</div>
    </Button>
  );
}
export default Button;
