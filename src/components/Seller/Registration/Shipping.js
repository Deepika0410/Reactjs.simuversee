import React, { useState } from "react";
import "./Shipping.css";
import shipping from "../../../images/shipped 2.png";
import { useLocation, useNavigate } from "react-router-dom";

const Shipping = () => {
  const [shippingMethod, setShippingMethod] = useState([]);
  let navigate = useNavigate();
  let location2 = useLocation();
  const shippingHandler = (e) => {
    setShippingMethod(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(shippingMethod);
    // console.log(location2);
    navigate("/seller/registrationcompete", {
      state: {
        ResultsofAllPreviousPages: location2,
        shippingDetails: shippingMethod,
      },
    });
  };
  return (
    <div className="shipping_MainCon">
      <h3 className="mainHeading">Select a Shipping Method</h3>
      <div className="shipping_Flex">
        <div className="shipping_InnerContainer">
          <div>
            <img src={shipping} alt="/" />
          </div>
          <div>
            <div className="shipping_radio_Con">
              <input
                type="radio"
                name="shippingMethod"
                value="method1"
                checked={shippingMethod === "method1"}
                onChange={shippingHandler}
              />

              <label>Method 1</label>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            </p>
          </div>
        </div>
        <div className="shipping_InnerContainer">
          <div>
            <img src={shipping} alt="/" />
          </div>
          <div>
            <div className="shipping_radio_Con">
              <input
                type="radio"
                name="shippingMethod"
                value="method2"
                checked={shippingMethod === "method2"}
                onChange={shippingHandler}
              />

              <label>Method 2</label>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            </p>
          </div>
        </div>
        <div className="shipping_InnerContainer">
          <div>
            <img src={shipping} alt="/" />
          </div>
          <div>
            <div className="shipping_radio_Con">
              <input
                type="radio"
                name="shippingMethod"
                value="method3"
                checked={shippingMethod === "method3"}
                onChange={shippingHandler}
              />

              <label>Method 3</label>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            </p>
          </div>
        </div>
      </div>
      <button onClick={submitHandler}>Proceed</button>
      <h3 className="heading">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et massa
        lorem. Donec at massa ipsum. Nullam consectetur leo in nisl lobortis,
        non luctus diam faucibus. Etiam eget lacinia sapien. Etiam tincidunt sem
        vel quam ullamcorper, sit amet tristique mauris interdum. Donec
        hendrerit nunc mauris, nec fermentum ipsum mollis et. Praesent sed lorem
        tristique, varius ex eget, ullamcorper mi. Pellentesque habitant morbi
        tristique senectus et netus et malesuada f
      </h3>
    </div>
  );
};

export default Shipping;
