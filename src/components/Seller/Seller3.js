import React from "react";
import { useNavigate } from "react-router-dom";
import { UseCart } from "../../context-api-setup/CartContext";
import Base from "../Base";
import "./Seller3.css";

const Seller3 = () => {
  let navigate = useNavigate();
  const prdUplData = UseCart();
  console.log(prdUplData.PrdUplState);
  return (
    <div className="seller3_Cont text-center">
      <h3>Your Product is listed on Simuverse successfully</h3>
      <p>
      You have now successfully listed your product on Simuverse .
You can now list as many products as you want in the same manner.
      </p>
      {/* {console.log(prdUplData.PrdUplState)} */}
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
