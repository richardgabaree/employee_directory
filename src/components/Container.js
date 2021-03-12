import React from "react";
// import EmployeeDetails from "EmployeeDetails";

function Container(props) {
  return <div className={`container${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
}

export default Container;