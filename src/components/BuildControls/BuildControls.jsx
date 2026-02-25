import React from "react";
import "./BuildControls.css";

const ORDER = ["salad", "bacon", "cheese", "meat"];

export default function BuildControls(props) {
  return (
    <div className="Controls">
      {ORDER.map((ctrl) => (
        <div className="ControlRow" key={ctrl}>
          <div className="Left">
            <div className="Name">{props.labels?.[ctrl] || ctrl}</div>
            <div className="Count">x{props.ingredients[ctrl]}</div>
          </div>

          <div className="Actions">
            <button
              className="Less"
              onClick={() => props.ingredientRemoved(ctrl)}
              disabled={props.disabledLess?.[ctrl]}
              type="button"
            >
              Olib tashlash
            </button>
            <button className="More" onClick={() => props.ingredientAdded(ctrl)} type="button">
              Qo'shish
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
