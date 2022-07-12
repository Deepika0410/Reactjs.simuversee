import React, { useEffect, useState } from "react";
import "./comp1.css";
import img1 from "../../../../images/img1.png";
import { useLocation } from "react-router-dom";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { wishlistAction } from "../../../../context-api-setup/wishlistReducer";
import { UseCart } from "../../../../context-api-setup/CartContext";
import { cartAction } from "../../../../context-api-setup/cartReducer";
import axios from "axios";
const Url = 'http://localhost:3000'

function Comp1() {
  const {
    cartState: { cartItems },
    cartDispatch,
  } = UseCart();
  const {
    wishlistState: { copyOfCartItems },
    wishlistDispatch,
  } = UseCart();
  const location = useLocation();
  const { title, id } = location.state;
  const { itemsState, itemsDispatch } = UseCart();
  // console.log(`id: ${id}`)
  const [image,setImage]=useState([]);
  const [score,setScore] = useState(0)
  const token=localStorage.getItem('token');
  const pid=localStorage.getItem('profileid');
  
  useEffect(()=>{

   async function getImage(){ await axios.get(`${process.env.REACT_APP_SV_BACKEND}/recommendation/model?profile_id=${pid}&product_id=${id}`,
    {headers:{"Authorization":`JWT ${token}`}}
    )
    .then((res)=>{
      setImage(res.data)
      console.log(res.data)
    })
    .catch((er)=>{console.log(er)})
  }
 getImage();
     axios.get(`${Url}/recommendation/score?profile_id=${pid}&product_id=${id}`,
    {headers:{"Authorization":`JWT ${token}`}}
    )
    .then((res)=>{
      setScore(res.data)
      console.log("this is the score")
      console.log(res.data)
    })
  },[]);
  return (
    <div className="container-fluid">
      <div
        className="row justify-content-center"
        style={{ display: "flex", position: "relative", alignItems: "center" }}
      >
        <div
          className="col item-sel-img1"
          align="center"
          style={{ maxWidth: "310px", display: "block" }}
        >
          {itemsState
            .filter((data) => {
              return data.id === id;
            })
            .map((item, key) => {
              return (
                <div key={key} className="c31">
                  <img
                    className="img-fluid"
                    src={image}
                    //src={`${item.image}`}
                    alt="model img"
                  />
                </div>
              );
            })}
              <div><h3>{score.fitnessScore}</h3>
            <h3>Is Fit ? {score.fitnessScore?score.isFit?"TRUE":"FALSE":"NULL"}</h3></div>
        </div>
        {itemsState
          .filter((data) => data.id === id)
          .map((item) => {
            return (
              <div className="col" style={{ maxWidth: "575px" }}>
                <div className="c32">
                  <img
                    className="img-fluid"
                    alt="img"
                    src={`${item.image}`}
                  />
                </div>
              </div>
            );
          })}
        {/* <div className="col-md-3 item-sel-img2" style={{ margin: "2%" }}>
          <div className="row justify-content-center">
            <div className="c31">
              {" "}
              <img className="img-fluid" src={tshirt} alt="img" />{" "}
            </div>
            <div className="c31">
              {" "}
              <img className="img-fluid" src={tshirt} alt="img" />{" "}
            </div>
            <div className="c31">
              {" "}
              <img className="img-fluid" src={tshirt} alt="img" />{" "}
            </div>
          </div>
        </div> */}
        <div className="col det">
          <div className="row">
            <div className="col">
              <p className="b-name">Brand Name: {title}</p>
              <p className="p-name">Product Name: {title}</p>
            </div>
          </div>
          {itemsState
            .filter((data) => {
              return data.id === id;
            })
            .map((item, key) => {
              // console.log(item);
              return (
                <div className="row pr_rw">
                  <div className="col pr_off"> Price: {item.price}rs</div>
                  <br />
                  <div className="col pr_off">Offer: 10%</div>
                </div>
              );
            })}

          <br />
          <div class="row">
            <div className="col-sm-12 siz">
              <p>Select Size</p>
            </div>
            <div className="col-sm-12">
              <div class="form-check form-check-inline">
                <input
                  class="form_check"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1">
                  S
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form_check"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2">
                  M
                </label>
              </div>
              <div class="form-check form-check-inline">
                {" "}<input
                  // class="form-check-input"
                  className="form_check"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                />
                <label class="form-check-label" for="inlineRadio3">
                  L
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  // class="form-check-input"
                  className="form_check"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio4"
                  value="option4"
                  disabled
                />
                <label class="form-check-label" for="inlineRadio4">
                  XL
                </label>
              </div>
            </div>
          </div>
          <br />

          <div class="row">
            <div className="col-sm-12 radin">
              {" "}
              <p>Color</p>
            </div>
            <div className="col-sm-12">
              <div class="form-check form-check-inline">
                <input
                  // class="form-check-input"
                  className="form_check"
                  type="radio"
                  name="inlineRadioOptions2"
                  id="inlineRadio5"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio5">
                  Red
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  // class="form-check-input"
                  className="form_check"
                  type="radio"
                  name="inlineRadioOptions2"
                  id="inlineRadio6"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio6">
                  Green
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  // class="form-check-input"
                  className="form_check"
                  type="radio"
                  name="inlineRadioOptions2"
                  id="inlineRadio7"
                  value="option3"
                />
                <label class="form-check-label" for="inlineRadio7">
                  Blue
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  // class="form-check-input"
                  className="form_check"
                  type="radio"
                  name="inlineRadioOptions2"
                  id="inlineRadio8"
                  value="option4"
                  disabled
                />
                <label class="form-check-label" for="inlineRadio8">
                  Grey
                </label>
              </div>
            </div>
          </div>

          <br />
          <div class="row">
            {itemsState
              .filter((data) => {
                // console.log(data.id);
                return data.id === id;
              })
              .map((item, key) => {
                console.log(item);
                return (
                  <>
                    <div class="col" style={{ margin: "1%" }} key={key.id}>
                      {cartItems.some((p) => p.id === item.id) ? (
                        <Button
                          variant="contained"
                          color="secondary"
                          endIcon={<DeleteIcon />}
                          onClick={() => {
                            cartDispatch({
                              type: cartAction.REMOVE_FROM_CART,
                              payload: item,
                            });
                          }}
                        >
                          Remove from bag
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          className="add_btn"
                          // className="btn btn-info"
                           style={{ backgroundColor: "#44F8ED" }}
                          onClick={() => {
                            cartDispatch({
                              type: cartAction.ADD_TO_CART,
                              payload: item,
                            });
                          }}
                        >
                         
                          {"    "}Add to bag{"   "}
                        </Button>
                      )}
                    </div>
                    <div class="col" style={{ margin: "1%" }}>
                      {copyOfCartItems.some((w) => w.id === item.id) ? (
                        <Button
                          variant="outlined"
                          color="secondary"
                          endIcon={<DeleteIcon />}
                          onClick={() => {
                            wishlistDispatch({
                              type: wishlistAction.REMOVE_FROM_WISHLIST,
                              payload: item,
                            });
                          }}
                        >
                          Remove from Wishlist
                        </Button>
                      ) : (
                        <button
                          class="btn btn-outline-danger"
                          style={{ maxWidth: "210px" }}
                          onClick={() => {
                            wishlistDispatch({
                              type: wishlistAction.ADD_TO_WISHLIST,
                              payload: item,
                            });
                          }}
                        >
                          {" "}
                          Wishlist{" "}
                        </button>
                      )}
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comp1;
