import React from "react";

const Alert = (props) => {
  return (
    <div style={{height: '60px', width: '100%'}}>
    {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
      <strong>{props.alert.type}</strong> {props.alert.message}
    </div>}
    </div>
  );
};

export default Alert;
