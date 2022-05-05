import React, { useState } from "react";
import { Steps } from "antd";
import "./RegistrationPage2.css";
import { Navigate, useLocation, useMatch, useNavigate } from "react-router-dom";
const { Step } = Steps;

const RegistrationPage2 = () => {
  const [input2, setInput2] = useState([
    {
      companyName: "",
      gstNumber: "",
      panNumber: "",
      storeName: "",
      product: "",
      address: "",
      partner: "",
      partnerName: "",
    },
  ]);
  let navigate = useNavigate();
  const location = useLocation();

  const inputHandler = (e) => {
    setInput2({ ...input2, [e.target.name]: e.target.value });
  };
  return (
    <div className="registration_Main_Con">
      <div className="registrionprogress_Page2">
        <Steps size="small" current={1}>
          <Step title="step 1" />
          <Step title="step 2" />
          <Step title="step 3" />
        </Steps>
        <h3 className="registrationpage2_Heading">
          Please tell us something about your company
        </h3>
      </div>

      <div className="sellerregistrationPage2_Con">
        <label>Legal Company Name</label>
        <input
          type="text"
          name="companyName"
          value={input2.companyName}
          onChange={inputHandler}
        />
        <label>GST Number (if Applicable)</label>
        <input
          type="text"
          name="gstNumber"
          value={input2.gstNumber}
          onChange={inputHandler}
        />
        <label>Pan Number</label>
        <input
          type="text"
          name="PanNumber"
          value={input2.panNumber}
          onChange={inputHandler}
        />
        <label>Store Name</label>
        <input
          type="text"
          name="store"
          value={input2.storeName}
          onChange={inputHandler}
        />
        <label>Product</label>
        <input
          type="text"
          name="product"
          value={input2.product}
          onChange={inputHandler}
        />
        <label>Business Address</label>
        <textarea
          type="text"
          name="address"
          value={input2.address}
          onChange={inputHandler}
          rows={5}
        />
        <div className="registrationPage2_Radio_Con">
          <label style={{ marginLeft: "0" }}>Partner</label>
          <div className="">
            <input
              type="radio"
              value="yes"
              name="partner"
              onChange={inputHandler}
              checked={input2.partner === "yes"}
            />
            <label>Yes</label>
          </div>
          <div>
            <input
              type="radio"
              name="partner"
              value="no"
              onChange={inputHandler}
              checked={input2.partner === "no"}
            />
            <label>No</label>
          </div>
        </div>
        <label>If yes provide names</label>
        <input
          type="text"
          name="Partner Name"
          value={input2.partnerName}
          onChange={inputHandler}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(input2);
            console.log(location, "pagefirst");
            navigate("/seller/registration/page3", {
              state: { page2results: input2, page1results: location },
            });
          }}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default RegistrationPage2;
