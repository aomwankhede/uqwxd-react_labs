import React from "react";
export default function About({mode}) {
  const myStyle = {
    backgroundColor: `${mode==='light'?'white':'#090b40'}`,
    color: `${mode==='light'?'black':'white'}`,
  };
  return (
    <div className="accordion my-5" id="accordionExample" style={myStyle}>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
           style={myStyle}
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Authors
          </button>
        </h2>
        <div
        style={myStyle}
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>Authors are under creative common license.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
          style={myStyle}
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            About Website
          </button>
        </h2>
        <div
        style={myStyle}
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>This is our new website TextUtils.Moto of learning to modify texts</strong>,
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo modi magnam labore sequi ipsum dolorem quas minus soluta. Optio, earum quis dolorem numquam delectus sequi? Atque deleniti dolorem ratione, facilis saepe id? Iste, sed!
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
          style={myStyle}
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Special thank
          </button>
        </h2>
        <div
        style={myStyle}
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>Special thank to my beloved mom and dad.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
  );
}
