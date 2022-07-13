import "./Seller.css";
import React, { useState } from "react";

import { Steps } from "antd";
import cloth from "../../images/Orange_Cloth.png";
import dimensionCloth from "../../images/Dimension_Cloth.png";
import { Navigate, useNavigate } from "react-router-dom";
import { UseCart } from "../../context-api-setup/CartContext";
import Base from "../Base";

const { Step } = Steps;

const Seller = () => {
  let navigate = useNavigate();
  let [counterDimensionCollar, setCounterDimensionCollar] = useState(0);
  let [counterDimensionLength, setCounterDimensionLength] = useState(0);
  let [counterDimensionChest, setCounterDimensionChest] = useState(0);
  let [counterDimensionWaist, setCounterDimensionWaist] = useState(0);
  let [counterDimensionSeleeve, setCounterDimensionSeleeve] = useState(0);
  let [counterDimensionShoulder, setCounterDimensionShoulder] = useState(0);
  let [productPrice, setProductPrice] = useState(0);
  const [productName, setProductName] = useState("");
  const [productDiscription, setProductDiscription] = useState("");
  const prdUplData = UseCart();

  const inputChangeHandlerCollar = (e) => {
    setCounterDimensionCollar(parseInt(e.target.value));
  };

  const inputChangeHandlerWaist = (e) => {
    setCounterDimensionWaist(parseInt(e.target.value));
  };
  const inputChangeHandlerSeleeve = (e) => {
    setCounterDimensionSeleeve(parseInt(e.target.value));
  };

  const inputChangeHandlerShoulder = (e) => {
    setCounterDimensionShoulder(parseInt(e.target.value));
  };

  const inputChangeHandlerLength = (e) => {
    setCounterDimensionLength(parseInt(e.target.value));
  };

  const decrementHandlerCollar = () => {
    if (counterDimensionCollar > 0) {
      setCounterDimensionCollar((prev) => prev - 1);
    } else {
      setCounterDimensionCollar(counterDimensionCollar);
    }
  };

  const incrementHandlerCollar = () => {
    if (counterDimensionCollar >= 0) {
      setCounterDimensionCollar((prev) => prev + 1);
    }
  };
  const decrementHandlerLength = () => {
    if (counterDimensionLength > 0) {
      setCounterDimensionLength((prev) => prev - 1);
    }
  };

  const incrementHandlerLength = () => {
    if (counterDimensionLength >= 0) {
      setCounterDimensionLength((prev) => prev + 1);
    }
  };

  const inputChangeHandlerChest = (e) => {
    setCounterDimensionChest(parseInt(e.target.value));
  };

  const decrementHandlerChest = () => {
    if (counterDimensionChest > 0) {
      setCounterDimensionChest((prev) => prev - 1);
    }
  };
  const incrementHandlerChest = () => {
    if (counterDimensionChest >= 0) {
      setCounterDimensionChest((prev) => prev + 1);
    }
  };

  const decrementHandlerWaist = () => {
    if (counterDimensionWaist > 0) {
      setCounterDimensionWaist((prev) => prev - 1);
    }
  };
  const incrementHandlerWaist = () => {
    if (counterDimensionWaist >= 0) {
      setCounterDimensionWaist((prev) => prev + 1);
    }
  };

  const decrementHandlerSeleeve = () => {
    if (counterDimensionSeleeve > 0) {
      setCounterDimensionSeleeve((prev) => prev - 1);
    }
  };
  const incrementHandlerSeleeve = () => {
    if (counterDimensionSeleeve >= 0) {
      setCounterDimensionSeleeve((prev) => prev + 1);
    }
  };

  const decrementHandlerShoulder = () => {
    if (setCounterDimensionShoulder > 0) {
      setCounterDimensionShoulder((prev) => prev - 1);
    }
  };
  const incrementHandlerShoulder = () => {
    if (counterDimensionShoulder >= 0) {
      setCounterDimensionShoulder((prev) => prev + 1);
    }
  };

  return (
  <Base>
  
  <div className="seller_Main">
      <>
        <div className="seller_Inner_Container" >
          <div className="inner_Content text-start"  >
            <h3>Reference Image for Uploading</h3>
            <p>
            Select the image from your device that you want of the product to upload, for <br/> for listing on the SimuVerse portal.
            </p>
          </div>
          <div>
            <img src={cloth} alt="/" style={{width:"197px" , height:"198px"}} />
          </div>
        </div>
        <div className="progress_Con">
          <h3>Product for Listing on Simuverse</h3>
          <div className="seller_Progress_Step ">
            <Steps direction="horizontal"  size="small" current={1}>
              <Step title="" />
              <Step title="Details" />
              <Step title="Upload Image" />
            </Steps>
          </div>
        </div>
        <div className="seller_Bottom_Container">
          <div className="inner_Content">
            <h3 className="left_Heading" style={{fontSize:"16px"}}>How to measure Diemsions</h3>
            <div className="img_cont">
              <img src={dimensionCloth} alt="/" style={{height:"400px", width:"400px"}}/>
            </div>
          </div>

          <div action="/action_page.php" className="seller_formPage">
            <div className="seller_Product_Description">
              <label>Name of the Product</label>
              <br />
              <input
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Name of the product"
              />
            </div>
            <div>
              <h3>Dimensions (in cm)</h3>
              <div className="dimension_Content">
                <label>Collar</label>
                <div className="dimension_button">
                  <span onClick={decrementHandlerCollar}>-</span>

                  <input
                    type="number"
                    value={counterDimensionCollar}
                    onChange={inputChangeHandlerCollar}
                  />
                  <span onClick={incrementHandlerCollar}>+</span>
                </div>
              </div>
              <div className="dimension_Content">
                <label>Length</label>
                <div className="dimension_button">
                  <span onClick={decrementHandlerLength}>-</span>

                  <input
                    type="number"
                    value={counterDimensionLength}
                    onChange={inputChangeHandlerLength}
                  />
                  <span onClick={incrementHandlerLength}>+</span>
                </div>
              </div>
              <div className="dimension_Content">
                <label>Chest</label>
                <div className="dimension_button">
                  <span onClick={decrementHandlerChest}>-</span>

                  <input
                    type="number"
                    value={counterDimensionChest}
                    onChange={inputChangeHandlerChest}
                  />
                  <span onClick={incrementHandlerChest}>+</span>
                </div>
              </div>
              <div className="dimension_Content">
                <label>Waist</label>
                <div className="dimension_button">
                  <span onClick={decrementHandlerWaist}>-</span>

                  <input
                    type="number"
                    value={counterDimensionWaist}
                    onChange={inputChangeHandlerWaist}
                  />
                  <span onClick={incrementHandlerWaist}>+</span>
                </div>
              </div>
              <div className="dimension_Content">
                <label>Seleeve Length</label>
                <div className="dimension_button">
                  <span onClick={decrementHandlerSeleeve}>-</span>

                  <input
                    type="number"
                    value={counterDimensionSeleeve}
                    onChange={inputChangeHandlerSeleeve}
                  />
                  <span onClick={incrementHandlerSeleeve}>+</span>
                </div>
              </div>
              <div className="dimension_Content">
                <label>Across Shoulder</label>
                <div className="dimension_button">
                  <span onClick={decrementHandlerShoulder}>-</span>

                  <input
                    type="number"
                    value={counterDimensionShoulder}
                    onChange={inputChangeHandlerShoulder}
                  />
                  <span onClick={incrementHandlerShoulder}>+</span>
                </div>
                
              </div>
              <div className="dimension_Content">

              <label for="fname">SKUID</label>
            
              <span>
              <input className="dimension_button" type="number" style={{border:"#eeeeee"}}/><br></br>

              </span>
             

              
             
              </div>
              <div className="dimension_Content">

                 <label for="fname">PRODUCT-ID</label>

                     <span>
                       <input className="dimension_button" type="number" style={{border:"#eeeeee"}}/><br></br>

                        </span>




                       </div>
              

            </div>
            <div className="description">
              <label>Description</label>
              <br />
              <input
                value={productDiscription}
                onChange={(e) => setProductDiscription(e.target.value)}
                type="text"
                id="fname"
                name="fname"
                placeholder="Description of the product. "
              />
            </div>
            <div className="seller_price">
              <label>Price</label>
              <br />
              <input
                onChange={(e) => setProductPrice(e.target.value)}
                value={productPrice}
                type="number"
                id="fname"
                name="fname"
                placeholder="999"
              />
            </div>
        
            <button
              onClick={(e) => {
                e.preventDefault();
                prdUplData.PrdUplDispatch({
                  type: "SET_DETAILS",
                  payload: {
                    ...prdUplData.PrdUplState,
                    name: productName,
                    image: null,
                    description: productDiscription,
                    price: productPrice,
                    collar: counterDimensionCollar,
                    length: counterDimensionLength,
                    chest: counterDimensionChest,
                    waist: counterDimensionWaist,
                    sleeveLength: counterDimensionSeleeve,
                    acrossShoulder: counterDimensionShoulder,
                  },
                });

                navigate("/shome/seller/addimage");
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </>
    </div>
  </Base>
  );
};

export default Seller;