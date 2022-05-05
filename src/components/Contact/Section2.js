import React from "react";
import "./Section2.css";
import ellipse7 from "../../images/ellipse7.png";
import Section2A from "./Section2A";
import Section2B from "./Section2B";
import Section2C from "./Section2C";
const Section2 = () => {
  return (
    <div className="s-2">
      <div className="head-text">
        <p style={{ fontSize: "3.125rem" }}>Our Vision</p>
      </div>
      <div className="post">
        <div className="container1">
          <div
            className="row"
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Section2A />
            <Section2B />
            <Section2C />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
