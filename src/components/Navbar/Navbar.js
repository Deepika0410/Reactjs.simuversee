import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { BsSearch, BsHeart, BsHandbag } from "react-icons/bs";
import "./Navbar.css";
import { CgProfile } from "react-icons/cg";
import Simuverse from "../../images/SimuVerse.png";
function Homebar() {
  let navigate = useNavigate();
  const wishListHandler = () => {
    navigate("/wishlist");
  };

  const searchHandler = () => {
    navigate("/search");
  };

  const bagHandler = () => {
    navigate("/bag");
  };

  const profileHandler = () => {
    navigate("/profile");
  };

  const loginHandler = () => {
    navigate("/login");
  };

  const logoutHandler = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('profileid');
    window.alert('Logged out successfully!');
    navigate("/login");
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg" 
        style={{
          backgroundColor: "#F8444F",
          minHeight: "8rem",
          border: "none",
          height: "100%",
        }}
      >
        <Container
          style={{
            backgroundColor: "#fff",
            borderRadius: "5px",
            minHeight: "5rem",
          }}
        >
          <Navbar.Brand className="logoContainer" to="/" >
            <img src={Simuverse} className="Navbar_icon" alt="/" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" style={{ width: "60%" }}>
            <Nav
              className="justify-content-around align-items-center"
              style={{ width: "100%", }}
            >
              <div className="myNavLink">
                <NavLink to="/home" >Home</NavLink>
                <NavLink to="/store">Store</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/shome">Seller</NavLink>
              </div>
              <div className="d-flex navButtons">
                <div className="d-flex align-items-center">
                  <div
                    className="navIcon"
                    onClick={searchHandler}
                    style={{
                      webkitBorderTopLeftRadius: "5px",
                      WebkitBorderBottomLeftRadius: "5px",
                    }}
                  >
                    <NavLink to="">
                      <BsSearch className="icon" />
                    </NavLink>
                  </div>
                  <div className="navIcon" onClick={wishListHandler}>
                    <BsHeart className="icon" />
                  </div>
                  <div className="navIcon" onClick={bagHandler}>
                    <BsHandbag className="icon" />
                  </div>
                  <div
                    className="navIcon"
                    onClick={profileHandler}
                    style={{
                      webkitBorderTopRightRadius: "5px",
                      WebkitBorderBottomRightRadius: "5px",
                    }}
                  >
                    <CgProfile className="icon" />
                  </div>
                </div>
                {
                  localStorage.getItem('token')==null?
                <div className="navloginSignUp" onClick={loginHandler}>
                  <button>Login/Sign Up</button>
                </div>:
                <div className="navloginSignUp" onClick={logoutHandler}>
                  <button>Logout</button>
                </div>
                }
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Homebar;
