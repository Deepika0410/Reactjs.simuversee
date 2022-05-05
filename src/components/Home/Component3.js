import React from "react";
import "./comp3.css";

import "./comp4.css";
import Cloth from "../../images/OrangeClothes.png";
import PersonImage from "../../images/Women_Image.png";
import Link from "../../images/link 1.png";
import FullWearImage from "../../images/FullBodyImage.png";

const Component3 = () => {
  return (
    <div className="comp3_MainContainer">
      <h3>How It Works</h3>
      <div className=" d-flex justify-content-center align-items-center comp3_container">
        <div
          className="d-flex flex-column comp3_left"
          style={{ textAlign: "left" }}
        >
          <div
            style={{
              width: "fit-content",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <img src={Cloth} alt="/" />
          </div>
          <h3>Selected Cloth</h3>
          <div
            style={{
              width: "fit-content",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <img src={PersonImage} alt="/" />
          </div>
          <h3>Your Beautiful Image</h3>
        </div>
        <div className="comp3_middle">
          <img src={Link} alt="/" />
        </div>
        <div className="comp3_right">
          <img src={FullWearImage} alt="/" />
        </div>
      </div>
      <p>
        How it works Selected cloth Your beautiful image Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Aenean imperdiet nisi ut lorem ornare
        sollicitudin. Fusce eget quam purus. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Aenean
        tincidunt ipsum vel quam luctu
      </p>
    </div>
  );
};

export default Component3;
