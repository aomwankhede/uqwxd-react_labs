import React from "react";

const capitalise=(word)=>{
    word=word[0].toUpperCase()+word.slice(1);
    return word;
}
function Alert(props) {
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalise(props.alert.type)}</strong>:
        {props.alert.message}
      </div>
    )
  );
}

export default Alert;
