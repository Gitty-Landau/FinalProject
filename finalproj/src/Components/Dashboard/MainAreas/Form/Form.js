import "./Form.css";
import Button from "../../Button/Button";
import { useState } from "react";
import Income from "../Income/Income";
function Form(props) {
  const [inputs, updateInputs] = useState({ category: "No" });
  const [checked, updateChecked] = useState(false);
  console.log(inputs);
  return (
    <div class="bottom-container">
      <div className="box transaction-box">
        <h3 class="section-header">New Donation</h3>
        <form className="form">
          <div className="form_item">
            <label for="date">Date</label>
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
          </div>
          <div className="form_item">
            <label for="company">Comapny</label>
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
          </div>

          <div className="form_item">
            <label for="amt">Amount</label>
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
          </div>

          <div className="checkbox">
            <input type="checkbox" name="exempt" id="exempt"></input>
            <label
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
          <div
            className="form_item"
            onClick={(e) => {
              e.preventDefault();
              props.updateArrFunc(function (prev) {
                return [...prev, inputs];
              });
              updateInputs({ category: "No" });
            }}
          >
            <Button text="Add"></Button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Form;
