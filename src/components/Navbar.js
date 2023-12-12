import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme={props.mode}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" rel="noreferrer" to="/about">
                About
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <div
              className="bg-dark cursor-pointer rounded mx-2"
              onClick={() => {
                props.themeSelection("dark");
              }}
              style={{ width: "35px", height: "35px" , border: "2px solid white",
              backgroundColor: "black"}}
            ></div>
            <div
              className="bg-light cursor-pointer rounded mx-2"
              onClick={() => {
                props.themeSelection("white");
              }}
              style={{
                width: "35px",
                height: "35px",
                border: "2px solid",
                borderColor: "black",
              }}
            ></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Here we can set types of props, Like string also we can include here this props is require or not
Navbar.propTypes = {
  title: PropTypes.string.isRequired, // Requires a string prop
  link: PropTypes.string.isRequired, // Requires a number prop
};

// This is used when we haven't assigned props so default props are used
Navbar.defaultProps = {
  title: "SohanTxt",
  link: "https://www.error.com",
};
