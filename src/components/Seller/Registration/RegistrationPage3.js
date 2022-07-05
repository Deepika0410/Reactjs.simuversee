import React, { useState, useMemo, useEffect } from "react";

import Simu from "../../../images/Simu.png"
import "./RegistrationPage3.css";
import Select from "react-select";
import countryList from "react-select-country-list";
import { Navbar,  NavItem, Nav, NavbarBrand } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { Steps } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
const { Step } = Steps;
const RegistrationPage3 = () => {
  const [input3, setInput3] = useState([
    {
      accountName: "",
      accountNumber: "",
      bankName: "",
      branchName: "",
      country: "",
    },
  ]);
  let navigate = useNavigate();
  const location1 = useLocation();

  const [mycountry, setmycountry] = useState([]);

  const options = useMemo(() => countryList().getData(), []);

  const inputHandler = (e) => {
    setInput3({ ...input3, [e.target.name]: e.target.value });
  };

  const selectHandler = (e) => {
    setmycountry({ mycountry: e.label });
  };
  return (
    <div>
      <div className="registrionprogress_Page3">
      <Navbar  style= {{backgroundColor: '#f8444f' , height:'60px' ,width:'1440px'}} dark expand="lg" >
                    <div className="container">
                    < img src={Simu} classname="ml-auto" style={{width: "200px", height: "48.74px", left: "76px", top: "4px", paddingBottom:"2px"}}/>
                        <NavbarBrand  className="mx-auto"  href="/" > 
                        <h1  mx-auto style= {{color: '#FFFFFF' , fontStyle:'normal', fontSize:'20px',fontFamily:'Poppins', fontWeight:'400', lineHeight:'30px'}}>Registration</h1></NavbarBrand>
                        
                        
                     
                           
                            
                     
                    </div>
                </Navbar>
        <Steps size="small" current={2}>
          <Step title="step 1" />
          <Step title="step 2" />
          <Step title="step 3" />
        </Steps>
        <h3 className="registrationpage3_Heading">
          Please Enter Your Bank Account Details
        </h3>
      </div>
      <div className="sellerregistrationPage3_Con">
        <label>Account Holder Name</label>
        <input
          type="text"
          name="accountName"
          value={input3.accountName}
          onChange={inputHandler}
        />
        <label>Account Number</label>
        <input
          type="text"
          name="accountNumber"
          value={input3.accountNumber}
          onChange={inputHandler}
        />
        <label>Bank Name</label>
        <input
          type="text"
          name="bankName"
          value={input3.bankName}
          onChange={inputHandler}
        />
        <label>Branch Name</label>
        <input
          type="text"
          name="branchName"
          value={input3.branchName}
          onChange={inputHandler}
        />
        <label>Country</label>

        <Select
          className="select"
          options={options}
          value={options.label}
          onChange={selectHandler}
          isSearchable={true}
        />

        <button
          onClick={(e) => {
            e.preventDefault();
            // console.log(input3);
            // console.log(mycountry);
            // console.log(location, "page3");
            // console.log(location1);
            navigate("/seller/registration/shipping", {
              state: {
                page3results: location1,
                previosuPageResults: input3,
                CountrySelect: mycountry,
              },
            });
          }}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default RegistrationPage3;
