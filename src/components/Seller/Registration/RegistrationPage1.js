import React, { useState } from "react";
import LinearStepper from "./LinearStepper";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import { Navbar,  NavItem, Nav, NavbarBrand } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

import Simu from "../../../images/Simu.png"


const RegistrationPage1 = () => {
  return (
    <>
    <Navbar  style= {{backgroundColor: '#f8444f' , height:'60px' ,width:'1440px'}} dark expand="lg" >
                    <div className="container">
                    <img src={Simu} classname="ml-auto" style={{width: "200px", height: "48.74px", left: "76px", top: "4px", paddingBottom:"2px"}}/>
                        <NavbarBrand  className="mx-auto"  href="/" > 
                        <h1   style= {{color: '#FFFFFF' , fontStyle:'normal', fontSize:'20px',fontFamily:'Poppins', fontWeight:'400', lineHeight:'30px'}}>Registration</h1></NavbarBrand> 
                    </div>
                </Navbar>
             
    <div>
    <CssBaseline />
      <Container component={Box} p={8} color="secondary">
        <Paper component={Box} p={3} style={{}} >
          <LinearStepper/>
        </Paper>
      </Container>
    </div>
    </>
  );
};

export default RegistrationPage1;
