import React from "react";
import { useState } from "react";

export default function Textform(props) {
  //Bina class banaye class k fayde
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const handleUpClick = (e) => {
    e.preventDefault();
    console.log("Uppercase button was clicked");
    const capitText = text.toUpperCase();
    setText(capitText);
    props.showAlert(" Edited to uppercase","success");
  };
  const handleDownClick = (e) => {
    e.preventDefault();
    console.log("LowerCase button was clicked");
    const lowText = text.toLowerCase();
    setText(lowText);
    props.showAlert(" Edited to lowercase","success");
  };
  const handleOnChange = (event) => {
    console.log("Changed button was clicked");
    setText(event.target.value);
  };
  const handleOnChange1 = (event) => {
    console.log("Changed obutton was clicked");
    setText1(event.target.value);
  };
  const handleClearClick = (e) => {
    e.preventDefault();
    setText("");
    props.showAlert(" Cleared","success");
  };
  const find = (e) => {
    e.preventDefault();
    let newText = text;
    let newText1 = newText.replace(text1, "f");
    setText(newText1);
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <form>
          <div className="mb-3 my-3">
            <textarea
              placeholder="Enter text here"
              className="form-control"
              id="myBox"
              rows="8"
              value={text}
              onChange={handleOnChange}
              style={{
                backgroundColor: `${props.mode === "light" ? "white" : "#090b40"}`,
                color: `${props.mode === "light" ? "black" : "white"}`,
              }}
            ></textarea>
            <button className="btn btn-primary my-3" onClick={handleUpClick}>
              to upperCase
            </button>
            <button
              className="btn btn-primary my-3 mx-2"
              onClick={handleDownClick}
            >
              to lowerCase
            </button>
            <button
              className="btn btn-primary my-3 mx-2"
              onClick={handleClearClick}
            >
              clear
            </button>
            <div>
              <textarea
                placeholder="Enter text here"
                className="form-control"
                id="myBox"
                rows="1"
                value={text1}
                onChange={handleOnChange1}
                style={{
                  backgroundColor: `${
                    props.mode === "light" ? "white" : "#090b40"
                  }`,
                  color: `${props.mode === "light" ? "black" : "white"}`,
                }}
              ></textarea>
              <button className="btn btn-primary my-3 mx-2" onClick={find}>
                find
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="container my-3">
        <h1>Your text Summary</h1>
        <p>{`NoOfChars:${text.length} && NoOfWords:${
          text.split(" ").length - 1
        }`}</p>
        <p>{`Time taken to read :-${0.008 * (text.split(" ").length - 1)}`}</p>
        <h2>Preview:-</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
