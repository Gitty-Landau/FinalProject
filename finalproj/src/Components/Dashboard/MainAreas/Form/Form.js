import "./Form.css";
import Button from "../../Button/Button";
import { useState } from "react";
import Income from "../Income/Income";
import { faL } from "@fortawesome/free-solid-svg-icons";

function Form(props) {
  const [inputs, updateInputs] = useState({ category: "No" });
  const [checked, updateChecked] = useState(false);
  return (
    <div class="box">
      <form className="form">
        <label class="header-container" for="date">
          Date
        </label>
        <input
          value={inputs.date}
          type="date"
          name="date"
          id="date"
          placeholder={new Date().getDate()}
          onChange={(e) =>
            updateInputs(function (prev) {
              return {
                ...prev,
                date: e.target.value,
              };
            })
          }
        ></input>

        <label class="header-container" for="company">
          Company Name
        </label>
        <input
          value={inputs.company}
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
          value={inputs.amount}
          type="Number"
          name="amt"
          id="amt"
          onChange={(e) =>
            updateInputs(function (prev) {
              return { ...prev, amount: Number(e.target.value) };
            })
          }
        ></input>
        {props.additionalCategory == "exempt" ? (
          <div className="checkbox-container">
            <span className="checkbox">
              <input
                type="checkbox"
                onClick={(e) => {
                  updateChecked(function (prev) {
                    return !prev;
                  });
                  updateInputs(function (prev) {
                    const exempt = prev.category == "Yes" ? "No" : "Yes";
                    return { ...prev, category: exempt };
                  });
                }}
                checked={checked}
              ></input>
            </span>
            <label class="header-container " for="exempt">
              Exempt from Ma'aser
            </label>
          </div>
        ) : (
          <>
            <label class="header-container" for="category">
              Category
            </label>
            <div class="select">
              <select
                value={inputs.category}
                id="standard-select"
                name="category"
                onChange={(e) =>
                  updateInputs(function (prev) {
                    return { ...prev, category: e.target.value };
                  })
                }
              >
                <option>Select Category</option>
                {props.categoryArr.map(function (item) {
                  return <option value={item.category}>{item.category}</option>;
                })}
              </select>
            </div>
          </>
        )}

        <input
          type="submit"
          value="ADD"
          onClick={(e) => {
            e.preventDefault();

            props.updateArrFunc(function (prev) {
              return [...prev, inputs];
            });
            updateInputs(function (prev) {
              return {
                company: "",
                amount: "",
                date: "",
                category: "No",
              };
            });
            updateChecked(false);
          }}
        ></input>
        <input
          value="CANCEL"
          type="button"
          onClick={(e) => {
            e.preventDefault();

            updateInputs(function (prev) {
              return {
                company: "",
                amount: "",
                date: "",
              };
            });
            updateChecked(false);
          }}
        ></input>
      </form>
    </div>
  );
}
export default Form;
