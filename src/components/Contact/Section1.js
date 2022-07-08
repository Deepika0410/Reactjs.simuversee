import React from "react";
import "./Section1.css";
import logo from "../../images/simu_logo.png";
import polygon from "../../images/polygon1.png";
import ellipse from "../../images/ellipse1.png";
const Section1 = () => {
  return (
    <div className="s-1">
      <div className="img-c">
        <img className="l-img" src={logo} alt="logo" />
      </div>
      <span className="abt">
        <h3>About SimuVerse</h3>
      </span>
      <div className="pol">
        {/* <img src={polygon} alt="" /> */}
        {/* <svg
          className="polygon"
          width="186"
          height="162"
          viewBox="0 0 186 162"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M91.2436 1.15832C92.0134 -0.175013 93.9379 -0.175008 94.7077 1.15833L185.372 158.194C186.142 159.527 185.18 161.194 183.64 161.194H2.31101C0.771412 161.194 -0.190833 159.527 0.578966 158.194L91.2436 1.15832Z"
            fill="#313131"
          />
        </svg> */}
      </div>

      {/* <div className="ell">
        <img src={ellipse} alt="" />
      </div> */}
      <div className="about-t">
        <p>
        This project is all about making users order their desired clothes and reduce return rates. Users can also browse and try clothes of their choice. In addition to that they can also get information about the cloth material and feel on the skin. Moreover they can freely browse clothes like they do in a usual online store. Users can also read the reviews by the other users to choose from finest clothes or collections.
        </p>
      </div>
    </div>
  );
};

export default Section1;
