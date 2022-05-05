import React, { useState } from "react";
import { Steps } from "antd";
import "./RegistrationPage1.css";
import { useNavigate } from "react-router-dom";

const { Step } = Steps;
const RegistrationPage1 = () => {
  let navigate = useNavigate();

  const [input, setInput] = useState([
    {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      gender: "",
    },
  ]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input);
    console.log(input.password);
    console.log(input.confirmPassword, "1");
    if (input.password === input.confirmPassword) {
      navigate("/seller/registration/page2", { state: { input } });
    } else {
      alert("Passwords Do Not Match");
    }
  };
  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div className="registration_Main_Con">
      <div className="registrionprogress_Page1">
        <Steps size="small" current={0}>
          <Step title="step 1" />
          <Step title="step 2" />
          <Step title="step 3" />
        </Steps>
      </div>

      <div className="sellerregistration_Con">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={input.firstName}
          onChange={inputHandler}
        />
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={input.lastName}
          onChange={inputHandler}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={inputHandler}
        />
        <label>Mobile Number</label>
        <input
          type="number"
          name="mobile"
          value={input.mobile}
          onChange={inputHandler}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={inputHandler}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={input.confirmPassword}
          onChange={inputHandler}
        />
        <div className="radio_Con">
          <label>Gender</label>
          <div>
            <input
              type="radio"
              value="male"
              name="gender"
              onChange={inputHandler}
              checked={input.gender === "male"}
            />
            <label>Male</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={inputHandler}
              checked={input.gender === "female"}
            />
            <label>Female</label>
          </div>

          <div>
            <input
              type="radio"
              value="other"
              onChange={inputHandler}
              name="gender"
              checked={input.gender === "other"}
            />
            <label>Other</label>
          </div>
        </div>
        <button onClick={submitHandler}>Proceed</button>
      </div>
    </div>
  );
};

export default RegistrationPage1;
