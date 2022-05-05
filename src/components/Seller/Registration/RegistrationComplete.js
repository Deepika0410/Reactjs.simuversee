import React from "react";
import { useLocation } from "react-router-dom";
import "./RegistrationComplete.css";

const RegistrationComplete = () => {
  const location3 = useLocation();
  return (
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
      <button>Start Product Listing</button>
    </div>
  );
};

export default RegistrationComplete;
