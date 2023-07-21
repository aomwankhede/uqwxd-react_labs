import React from "react";
export default function swutch(props) {
  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={props.toggleMode}
        />
        <label
          className={`form-check-label mx-3 text-${
            props.mode === "light" ? "dark" : "light"
          }`}
          htmlFor="flexSwitchCheckDefault"
        >{`Enable ${props.mode === "light" ? "dark" : "light"} mode`}</label>
      </div>
    </>
  );
}
