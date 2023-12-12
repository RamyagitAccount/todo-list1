import React, { useState } from "react";

export default function Form(props) {
  const [text, changeText] = useState("");
  //    changeText("mm");
  const toLowerCase = () => {
    const lower = text.toLowerCase();
    changeText(lower);
  };
  const toUpperCase = () => {
    const upper = text.toUpperCase();
    changeText(upper);
  };

  const changeFunc = (e) => {
    changeText(e.target.value);
  };

  const clearText = () => {
    changeText("");
  };
  return (
    <>
      <div className="container my-3">
        <div className="form-floating">
          <textarea
            className="form-control my-3"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            rows={7}
            onChange={changeFunc}
            value={text}
          >
            {text}
          </textarea>
          <button className="btn btn-primary" onClick={toUpperCase}>
            ConvertTo Uppercase
          </button>
          <button className="btn btn-primary mx-3" onClick={toLowerCase}>
            ConvertTo Lowercase
          </button>
          <button className="btn btn-primary" onClick={clearText}>
            Clear Text
          </button>
        </div>
      </div>
      {/* <div className={`container text-${props.mode==="light"?"dark":"light"}`}> */}

      <div className={`container`}>
        <p>
          Total of {text.split(" ").length} words, with {text.length} letters in
          it
        </p>
        <p>{text}</p>
      </div>
    </>
  );
}
