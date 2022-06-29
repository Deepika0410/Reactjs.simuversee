import React from "react";
import { useNavigate } from "react-router-dom";
import { UseCart } from "../../context-api-setup/CartContext";
import "./Seller3.css";

const Seller3 = () => {
  let navigate = useNavigate();
  const prdUplData = UseCart();
  console.log(prdUplData.PrdUplState);
  return (
    <div className="seller3_Cont text-center">
      <h3>Your Product is listed on Simuverse successfully</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
        efficitur nibh, in placerat diam. Praesent aliquam iaculis accumsan.
        Duis eget sem congue, dignissim quam quis, fringilla mi. Phasellus
        ultricies elit non enim tincidunt tristique. Phasellus dictum ut lectus
        eu convallis
      </p>
      <button
            onClick={() => {
          navigate("/shome");
        }}
      >
        Back Home
      </button>
    </div>
  );
};

export default Seller3;
