import React from "react";
import { useLocation, Link} from "react-router-dom";
import "./RegistrationComplete.css";
import { Navbar,  NavItem, Nav, NavbarBrand } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

import Simu from "../../../images/Simu.png"
const RegistrationComplete = () => {
  const location3 = useLocation();
 
  
  
  return (
    <>
    <div>
    <Navbar  style= {{backgroundColor: '#f8444f' , height:'60px' ,width:'1440px'}} dark expand="lg" >
                    <div className="container">
                    < img src={Simu} classname="ml-auto" style={{width: "200px", height: "48.74px", left: "76px", top: "4px", paddingBottom:"2px"}}/>
                        <NavbarBrand  className="mx-auto"  href="/" > 
                        <h1  mx-auto style= {{color: '#FFFFFF' , fontStyle:'normal', fontSize:'20px',fontFamily:'Poppins', fontWeight:'400', lineHeight:'30px'}}>Registration</h1></NavbarBrand>
                        
                        
                     
                           
                            
                     
                    </div>
                </Navbar>

    </div>
    <div className="registration_Complete_Main">
      {console.log(location3)}
   
             
      <h1>CONGRATULATIONS</h1>
      <h3>Your Account is Created Successfully</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
        efficitur nibh, in placerat diam. Praesent aliquam iaculis accumsan.
        Duis eget sem congue, dignissim quam quis, fringilla mi. Phasellus
        ultricies elit non enim tincidunt tristique. Phasellus dictum ut lectus
        eu convallis.
      </p>
      <div>
      <Link to="/shome/productlisting" className="btn">Start Product Listing</Link>
      </div>
    
     
    </div>
    
    </>
  
  );
};

export default RegistrationComplete;
