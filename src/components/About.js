import { React, useEffect } from "react";
import "./About.css";
import feature1 from '../media/images/feature-1.jpg';
import feature2 from '../media/images/feature-2.jpg';
import feature3 from '../media/images/feature-3.jpg';

const About = (props) => {
  const { mode } = props;
  // This is for dark mode and light mode
  useEffect(() => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "#050019";
      document.body.style.color = "white";
    } else if (mode === "light") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, [mode]);
  return (
    <>
      <div className="section-1">
        <div className="about-head">
          <h1 className="inotebook-heading">Hi there!</h1>
          <h4 className="inotebook-sub-heading">
            Capture, Organize, Inspire; Your Digital SohanTxt.
          </h4>
        </div>
      </div>
      <div className="section-2">
        <h3>Features of <span className="text-danger">SohanTxt</span></h3>
        <div className="features-container">
          <div className="feature-img-container">
            <img src={feature1} alt="" />
            <p>Most secure option!</p>
          </div>
          <div className="feature-img-container">
            <img src={feature2} alt="" />
            <p>Simplicity and Speed!</p>
          </div>
          <div className="feature-img-container">
            <img src={feature3} alt="" />
            <p>Most reliable option!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;