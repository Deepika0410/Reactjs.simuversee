import React, { useState } from "react";
import "./comp1.css";
import img1 from "../../../images/Home/img1.png";
import img2 from "../../../images/Home/img2.png";
import homeImage from "../../../images/homeImage.png";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const Component = () => {
  return (
    <div className="comp1_container">
      <div className="comp1_innerContainer">
        <div className="comp1_heading">
          <h3>Re imagine the way you sell Introducing SIMUVERSE</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            imperdiet nisi ut lorem ornare sollicitudin. Fusce eget quam purus
          </p>
          <button ><NavLink id="exploreBtn" to="/shome/productlisting"><div style={{padding:"5px "}}>Start Listing</div></NavLink></button>
        </div>
        {/* <img src={homeImage} alt="/" /> */}
      </div>
    </div>
  );
};

export default Component;
