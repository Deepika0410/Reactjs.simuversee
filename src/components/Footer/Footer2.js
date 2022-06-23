import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/simu_logo.png";
import { BiMap } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import "./Section4.css";
const Footer2 = () => {
  return (
    <div className="s-4">
      <div className="container">
        <div 
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {/* about */}
          <div className="col-8 wid-1 wid-2 col-md-4 part aboutt a23">
            <div className="logo-c" style={{marginLeft:'-20px' }}>
              <img width="100%" src={logo} alt="logo_img" />
            </div>
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                imperdiet nisi ut lorem ornare sollicitudin.
              </p>
            </div>
          </div>
          {/* quick links */}

          <div
            className="col-8 wid-1 wid-3 col-md-3 part a23 " 
            id="ouickLink"
            style={{   }}
          >
            <div>
              <p className="link-head">Quick Links</p>
            </div>
            <div className="links-cont" style={{ textAlign: "left" }}>
              <NavLink to="/contact" >About us</NavLink>
              <NavLink to="/store">Store</NavLink>
              <NavLink to="/login">Login</NavLink>
              {/* <NavLink to="">Login</NavLink> */}
            
            </div>
          </div>
          {/* get in touch  */}
          <div className="col-8 wid-1 wid-2 col-md-4 part cont a23">
            <p className="part-text">Get in touch with us</p>
            <div className="a-1 left-1">
              <div className="row">
                <div className="col-2">
                  <BiMap />
                </div>
                <div className="col-10 uyy">
                  <p>Adress Something something</p>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <BsTelephone />
                </div>
                <div className="col-10 uyy">
                  <p>+91 0123456789</p>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <GoMail />
                </div>
                <div className="col-10 uyy">
                  <p> Email@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-4 col-12 wid-2 follow"
              style={{
               
              }}
            >
              <h5>Follow us</h5>
              {/* TRBL */}
              <div
                className="row social-icons"
                style={{
                 
                }}
              >
                <div className="col-2 w">
                  <AiOutlineLinkedin />
                </div>
                <div className="col-2 mr w">
                  <FiFacebook />
                </div>
                <div className="col-2 w">
                  <AiOutlineInstagram />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* social-icons */}
      </div>
    </div>
  );
};

export default Footer2;