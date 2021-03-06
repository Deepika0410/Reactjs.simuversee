import React, { useState } from "react";
import {useNavigate} from 'react-router';
import "./comp1.css";
import img1 from "../../../images/Home/img1.png";
import img2 from "../../../images/Home/img2.png";
import homeImage from "../../../images/homeImage.png";
import { Navigate, NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const Component = () => {
  
  let navigate = useNavigate();
  let now = localStorage.length;
  
  return (
    <div className="comp1_container">
      <div className="comp1_innerContainer">
        <div className="comp1_heading">
          <h3>Re imagine the way you sell Introducing SIMUVERSE</h3>
          <p>
          Click on te button below to start listing your products on the SimuVerse portal.
          </p>
          <NavLink id="exploreBtn" to={!now?'/login':"/shome/productlisting"}><div>Start Listing</div></NavLink>
        </div>
        {/* <img src={homeImage} alt="/" /> */}
      </div>
    </div>
  );
};

export default Component;
