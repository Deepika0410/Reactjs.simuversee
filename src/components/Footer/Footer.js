import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrInstagram, GrLocation } from "react-icons/gr";
import Simuverse from "../../images/SimuVerse.png";

import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="d-flex footerContainer">
      <div className="d-flex flex-column footerfirstContainer">
        <div className="">
          <img src={Simuverse} alt="/" />
        </div>
        <p className="footerparagrahDetail">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          imperdiet nisi ut lorem ornare sollicitudin.
        </p>
        <div className="Footer_Icon_Con">
          <h3>Follow Us</h3>

          <span>
            <FaFacebookF className="icon" />
          </span>

          <span>
            <ImLinkedin className="icon" />
          </span>

          <span>
            <GrInstagram className="icon" />
          </span>
        </div>
      </div>
      <div className="d-flex flex-column footerSecondContainer">
        <h3 className="linkheading">Quick links</h3>
        <h3>About US</h3>
        <h3>Store</h3>
        <h3>Login </h3>
        <h3>Login</h3>
      </div>
      <div className="d-flex flex-column footerThirdContainer">
        <h3 className="Footer_last_Heading">Get In Touchwith Us</h3>

        <h3>
          {" "}
          <span>
            <GrLocation />
          </span>
          Address
        </h3>

        <h3>
          {" "}
          <span>
            <BsFillTelephoneFill />
          </span>
          Phone Number
        </h3>

        <h3>
          {" "}
          <span>
            <AiOutlineMail />
          </span>
          Email
        </h3>
      </div>
    </div>
  );
};

export default Footer;
