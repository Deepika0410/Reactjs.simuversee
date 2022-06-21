import React, { useEffect, useState } from "react";
import Select from "./Select";
import "./ProductListing.css";
import sample from "../../../images/ProductListingSample.png";
import { NavLink } from "react-router-dom";
import { createFilterOptions } from "@mui/material";
import {getOpt} from './getOpt';
import {UseCart} from '../../../context-api-setup/CartContext';

const Productlisting = () => {
  const [quantity, setQuantity] = useState({
    small: 0,
    medium: 0,
    large: 0,
  });
  let [cat,setCat] = useState("men");
  let [Opt,setOpt] = useState(getOpt(cat));
  let [type, setType] = useState("tshirts");

  const {PrdUplDispatch} = UseCart();

  useEffect(()=>{
      setOpt(getOpt(cat))
  },[cat])

  const decrementHandlerSmall = () => {
    if (quantity.small > 0) {
      setQuantity({ ...quantity, small: quantity.small - 1 });
    }
  };
  const incrementHandlerSmall = () => {
    if (quantity.small >= 0) {
      setQuantity({ ...quantity, small: quantity.small + 1 });
    }
  };
  const decrementHandlerMedium = () => {
    if (quantity.medium > 0) {
      setQuantity({ ...quantity, medium: quantity.medium - 1 });
    }
  };
  const incrementHandlerMedium = () => {
    if (quantity.medium >= 0) {
      setQuantity({ ...quantity, medium: quantity.medium + 1 });
    }
  };
  const decrementHandlerLarge = () => {
    if (quantity.large > 0) {
      setQuantity({ ...quantity, large: quantity.large - 1 });
    }
  };
  const incrementHandlerLarge = () => {
    if (quantity.large >= 0) {
      setQuantity({ ...quantity, large: quantity.large + 1 });
    }
  };

  const inputChange = (e) => {
    setQuantity({ ...quantity, [e.target.name]: parseInt(e.target.value) });
    console.log(quantity);
  };
  return (
    <div className="product_listing_Con">
      <div>
        <h3 className="Heading">Choose Product</h3>
        <div className="product_Inner_Con">
          <div className="product_Left_Con">
            <div>
              <h3>CHOOSE YOUR PRODUCT TYPE</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et massa lorem. Donec at massa ipsum. Nullam consectetur leo in
                nisl lobortis, non luctus diam faucibus. Etiam eget lacinia
                sapien. Etiam tincidunt sem vel quam ullamcorper,
              </p>
              <div className="x">
                {/*Dummy select-option since no field in the model is present*/}
                <label htmlFor="type">TYPE :   </label>
                <select name="type" id="type" style={{border:"2px solid black"}} onChange={(e)=>{setType(e.target.value)}}>
                  {Opt.map(item => {
                    return <option value={item}>{item}</option>
                  })}
                  {/* {console.log(Opt)} */}
                </select>
                <br></br>
                <label htmlFor="category" >CATEGORY :   </label>
                <select name="category" id="category" style={{border:"2px solid black"}} onChange={(e)=>{setCat(e.target.value)}}>
                  <option value="men">MEN</option>
                  <option value="women">WOMEN</option>
                  <option value="kids">KIDS</option>
                </select>
              </div>
            </div>
            <h3 className="Left_Display_Heading">
              SELECT AVAILABLE SIZE AND QUANTITY
              {/*Since no field in the model is present hence it is not sent to the server.*/}
            </h3>
            <div>
              <div className="radio__Product_Con">
                <div className="checbox_Pr">
                  {/* <input type="checkbox" className="red-input" /> */}
                  <label>Small</label>
                </div>
                <div className="button">
                  <span onClick={decrementHandlerSmall}>-</span>
                  <input
                    value={quantity.small}
                    onChange={inputChange}
                    type="number"
                    name="small"
                  />

                  <span onClick={incrementHandlerSmall}>+</span>
                </div>
              </div>
              <div className="radio__Product_Con">
                <div className="checbox_Pr">
                  {/* <input type="checkbox" className="red-input" /> */}
                  <label>Medium</label>
                </div>
                <div className="button">
                  <span onClick={decrementHandlerMedium}>-</span>
                  <input
                    value={quantity.medium}
                    onChange={inputChange}
                    type="number"
                    name="medium"
                  />
                  <span onClick={incrementHandlerMedium}>+</span>
                </div>
              </div>
              <div className="radio__Product_Con">
                <div className="checbox_Pr">
                  {/* <input type="checkbox" className="red-input" /> */}
                  <label>Large</label>
                </div>
                <div className="button">
                  <span onClick={decrementHandlerLarge}>-</span>
                  <input
                    value={quantity.large}
                    onChange={inputChange}
                    type="number"
                    name="small"
                  />
                  <span onClick={incrementHandlerLarge}>+</span>
                </div>
              </div>
            </div>
            <button className="startListing" onClick={()=>{PrdUplDispatch({type:"SET_DETAILS",payload:{category:cat,type:type,small:quantity.small,medium:quantity.medium,large:quantity.large}})}}><NavLink to="/shome/seller"><div>START LISTING</div></NavLink></button>
          </div>
          <div className="product_Right_Con_Img">
            <img src={sample} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productlisting;
