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
      <h3 className="htw">How It Works</h3>
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
          <h3 style={{fontSize:"1.2rem"}}>Selected Cloth</h3>
          <div
            style={{
              width: "fit-content",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <img src={PersonImage} alt="/" style={{width:"10rem"}}/>
          </div>
          <h3 style={{fontSize:"1.2rem"}}>Your Beautiful Image</h3>
        </div>
        <div className="comp3_middle" >
          <img src={Link} alt="/" />
        </div>
        <div className="comp3_right">
          <img src={FullWearImage} alt="/" />
        </div>
      </div>
      <p style={{marginTop:"1rem"}}>
      Select the clothing item you liked and use the avatar that you created to find the best fit for you.
      </p>
    </div>
  );
};

export default Component3;
