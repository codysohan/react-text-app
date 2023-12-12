import React, { useState } from "react";

export default function Form(props) {
  const handleUpClick = () => {
    let upCaseText = text.toUpperCase();
    // Correct way to change the State
    setText(upCaseText);
    props.showAlert("success", "Text Converted to Upper Case");
  };

  const handleLoClick = () => {
    let upCaseText = text.toLowerCase();
    // Correct way to change the State
    setText(upCaseText);
    props.showAlert("success", "Text Converted to Lower Case");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("success", "Text Cleared");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    props.showAlert("success", "Text Copied to Clipboard!")
  }

  const handleGmClick = () => {
    let gmailId = text.match(/[\w\.-]+@gmail\.com/g);

    if (gmailId && gmailId.length >= 1) {
      let gmailMessage = `${gmailId.length} Gmail Id Found ${gmailId}`;
      setGmail(gmailMessage);
      props.showAlert("success", `: ${gmailId.length} Gmail Found`);
    } else {
      setGmail("No Gmail Found!");
      props.showAlert("warning", "No Gmail Found!");
    }
  };
  
  const handleOnChange = (event) => {
    setText(event.target.value); //If i try to change the textarea text this function handles that
  };

  const [text, setText] = useState(""); // Here is how we can declare state the useState is used for default text to set
  const [gmail, setGmail] = useState("No Gmail Found!"); // Here is how we can declare state the useState is used for default text to set
  
  return (
    <>
      <div className={`container text-${props.textColor}`}>
        <h1>{props.heading}</h1>

        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Message:{" "}
        </label>
        <textarea
          className={`form-control`}
          id="exampleFormControlTextarea1"
          rows="3"
          data-bs-theme={props.mode}
          value={text}
          onChange={handleOnChange}
        ></textarea>

        <button disabled={text.length===0} className={`btn btn-${props.btnColor} my-3 mx-1`} onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0}  className={`btn btn-${props.btnColor} my-3 mx-1`} onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0}  className={`btn btn-${props.btnColor} my-3 mx-1`} onClick={handleGmClick}>
          Gmail Identifier
        </button>
        <button disabled={text.length===0} 
          className={`btn btn-${props.btnColor} my-3 mx-1`}
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button disabled={text.length===0} className={`btn btn-${props.btnColor} my-3 mx-1`} onClick={handleCopy}>Copy</button>
      </div>

      <div className={`container my-3 text-${props.textColor}`}>
        <h1>Your Text Summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters
        </p>
        <p>{`${(0.008 * text.split(/\s+/).filter((word) => word.length !== 0).length).toFixed(2)} minutes required to read this`}</p>
        <p>
          <strong>{gmail}</strong>
        </p>
      </div>

      <div className={`container text-${props.textColor}`}>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text to Preview here"}</p>
      </div>
    </>
  );
}
