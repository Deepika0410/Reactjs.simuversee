import React, { useState } from "react";
import {useNavigate} from 'react-router';
import "./comp1.css";
import img1 from "../../../images/Home/img1.png";
import img2 from "../../../images/Home/img2.png";
import homeImage from "../../../images/homeImage.png";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const Component = () => {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/shome/productlisting')
  }
  return (
    <div className="comp1_container">
      <div className="comp1_innerContainer">
        <div className="comp1_heading">
          <h3>Re imagine the way you sell Introducing SIMUVERSE</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            imperdiet nisi ut lorem ornare sollicitudin. Fusce eget quam purus
          </p>
          <button onClick={handleClick} id="butDesign">Start Listing</button>
        </div>
        {/* <img src={homeImage} alt="/" /> */}
      </div>
    </div>
  );
};

export default Component;
