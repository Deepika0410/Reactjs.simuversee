import React, { useState, useEffect } from "react";
import Select from "./Select";
import "./ProductListing.css";
import sample from "../../../images/ProductListingSample.png";
import { NavLink } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { type } from "@testing-library/user-event/dist/type";
import { UseCart } from '../../../context-api-setup/CartContext.js'
import Base from "../../Base";



const Productlisting = () => {
  const [quantity, setQuantity] = useState({
    small: 0,
    medium: 0,
    large: 0,
  });

  const option = {
    Men: ['Tshirts', 'Jackets', 'Jeans', 'Sweaters'],
    Women: ['Dresses', 'Tops', 'Tshirts', 'Jeans'],
    Kids: ['Tshirts', 'Shirts', 'Jeans', 'Dresses']
  };
  const category = ['Men', 'Women', 'Kids'];

  let [cat, setCat] = useState(category[0]);
  let [Opt, setOpt] = useState(option[cat]);
  let [type, setType] = useState("Tshirts");

  const { PrdUplDispatch } = UseCart();


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
  const [formData, setfromData] = useState({
    isAgree: false,
    redinput: ""
  })
  const handleChange = e => {

    e.preventDefault();
    PrdUplDispatch({
      type: "SET_DETAILS",
      payload: {
        small: quantity.small,
        medium: quantity.medium,
        large: quantity.large,
        category: cat,
        type: type,

      },
    });


  }


  return (
    <Base>

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
                <div style={{ marginLeft: '0%', marginBottom: '30px', marginTop: '50px', display: 'flex' }}>
                  <Autocomplete
                    options={Opt}
                    onChange={(event, value) => { setType(value) }}

                    style={{ width: 150 }}
                    renderInput={(params) =>
                      <TextField {...params} label="Type" variant="outlined" />}
                  />
                  <Autocomplete
                    options={category}
                    onChange={(event, value) => { setCat(value); setOpt(option[value]); }}
                    inputValue={cat}
                    onInputChange={(event, value) => { setCat(value) }}
                    style={{ width: 150, marginLeft: '20px' }}
                    renderInput={(params) =>
                      <TextField {...params} label="Category" variant="outlined" />}
                  />

                </div>
              </div>
              <h3 className="Left_Display_Heading">
                SELECT AVAILABLE SIZE AND QUANTITY
              </h3>
              <form>
                <div>
                  <div className="radio__Product_Con">
                    <div className="checbox_Pr">
                      <input type="radio" className="red-input" name="redinput" value="small" onChange={handleChange} checked={formData.redinput == "small"} />
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
                      <input type="radio" className="red-input" name="redinput" value="medium" onChange={handleChange} checked={formData.redinput == "medium"} />
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
                      <input type="radio" className="red-input" name="redinput" value="large" onChange={handleChange} checked={formData.redinput == "large"} />
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
              </form>
              <button className="startListing" onClick={handleChange}><NavLink to="/shome/seller"><div>START LISTING</div></NavLink></button>
            </div>
            <div className="product_Right_Con_Img">
              <img src={sample} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Productlisting;


