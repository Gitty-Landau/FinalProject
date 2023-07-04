import "./Form.css";
import Button from "../../Button/Button";
import { useState } from "react";
import Income from "../Income/Income";
function Form(props) {
  const [inputs, updateInputs] = useState({ category: "No" });
  const [checked, updateChecked] = useState(false);
  console.log(inputs);
  return (
    <div class="box">
      <form className="form">
        <label class="header-container" for="date">
          Date
        </label>
        <input
          type="date"
          name="date"
          id="date"
          placeholder={new Date().getDate()}
          onChange={(e) =>
            updateInputs(function (prev) {
              return { ...prev, date: e.target.value };
            })
          }
        ></input>

        <label class="header-container" for="company">
          Company Name
        </label>
        <input
          type="text"
          name="company"
          id="company"
          onChange={(e) =>
            updateInputs(function (prev) {
              return { ...prev, company: e.target.value };
            })
          }
        ></input>

        <label class="header-container" for="amt">
          Amount
        </label>

        <input
          type="Number"
          name="amt"
          id="amt"
          onChange={(e) =>
            updateInputs(function (prev) {
              return { ...prev, amount: e.target.value };
            })
          }
        ></input>

        <div className="checkbox-container">
          <span className="checkbox">
            <input type="checkbox"></input>
          </span>
          <label
            class="header-container "
            for="exempt"
            onClick={(e) => {
              updateChecked(function (prev) {
                return !prev;
              });
              updateInputs(function (prev) {
                return { ...prev, category: checked ? "No" : "Yes" };
              });
            }}
          >
            Exempt from Ma'aser
          </label>
        </div>
        <input
          type="submit"
          value="ADD"
          onClick={(e) => {
            e.preventDefault();
            props.updateArrFunc(function (prev) {
              return [...prev, inputs];
            });
            updateInputs({ category: "No" });
          }}
        ></input>
        <input
          value="CANCEL"
          type="button"
          onClick={(e) => {
            e.preventDefault();
          }}
        ></input>
      </form>
    </div>
  );
}
export default Form;
