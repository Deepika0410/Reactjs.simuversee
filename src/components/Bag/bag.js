import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { UseCart } from "../../context-api-setup/CartContext";
import { cartAction } from "../../context-api-setup/cartReducer";
import { NavLink } from "react-router-dom";
import "./bag.css";

const Bag = () => {
  const {
    cartState: { cartItems },
    cartDispatch,
  } = UseCart();
  const [totalPrice, setTotalPrice] = useState();
  let gst = 0;

  useEffect(() => {
    setTotalPrice(
      cartItems.reduce((a, b) => Number(a) + Number(b.price) * b.qty, 0)
    );
  }, [cartItems]);
  console.log(cartItems);
  return (
    <>
      {cartItems.length > 0 ? (
        <div>
          <div className="heading_Bag">
            <h3 className="quantityItems">Items({cartItems.length})</h3>
            <div className="heading_Right">
              <h3>Quantity</h3>
              <h3>Price</h3>
              <h3>Total Price</h3>
            </div>
          </div>
          <>
            {cartItems.map((item, index) => {
              return (
                <div
                  className="d-flex justify-content-between bagInnerContainer"
                  key={index}
                >
                  <div className="d-flex leftContainer_Bag">
                    <div
                      style={{
                        border: "1px solid #CCCCCC",
                        height: "150px",
                        width: "250px",
                        padding: "5px",
                        borderRadius: "10PX",
                        marginRight: "10px",
                      }}
                    >
                      <img
                        src={`${item.image}`}
                        alt="/"
                        className="img"
                      />
                    </div>
                    <div className="d-flex flex-column">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>
                    {console.log(item)}
                  </div>
                  <div className="d-flex rightContainer_Bag">
                    <div className="button">
                      <span
                        className="quantityIncDec"
                        onClick={() => {
                          if (item.qty > 1) {
                            cartDispatch({
                              type: cartAction.DEC_QTY,
                              payload: {
                                id: item.id,
                                qty: item.qty,
                              },
                            });
                            cartDispatch({
                              type: cartAction.TOTAL_PRICE,
                              payload: {
                                id: item.id,
                                price: item.price,
                              },
                            });
                          } else if (item.qty == 1) {
                            cartDispatch({
                              type: cartAction.REMOVE_FROM_CART,
                              payload: item,
                            });
                          }
                        }}
                      >
                        -
                      </span>
                      <span>{item.qty}</span>
                      <span
                        className="quantityIncDec"
                        onClick={() => {
                          if (item.qty >= 1) {
                            cartDispatch({
                              type: cartAction.INC_QTY,
                              payload: {
                                id: item.id,
                                qty: item.qty,
                              },
                            });
                            cartDispatch({
                              type: cartAction.TOTAL_PRICE,
                              payload: {
                                id: item.id,
                                price: item.price,
                              },
                            });
                          }
                        }}
                      >
                        +
                      </span>
                    </div>
                    <h3>{item.price} rs.</h3>
                    <div className="rightContent_InnerContainer">
                      <h3>{item.totalAmount} rs.</h3>
                      <AiFillDelete
                        className="delete"
                        onClick={() =>
                          cartDispatch({
                            type: cartAction.REMOVE_FROM_CART,
                            payload: item,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </>
          <div className="line"></div>
          <div className="total_price">
            <h3>
              Sub Total ({cartItems.reduce((a, b) => a + b.qty, 0)}) items
            </h3>
            <h3> Total Price :- {totalPrice} rs.</h3>
          </div>
          <div className="bottom_Container">
            <div className="bottom_inner">
              <div>
                <h3 className="shopping_Summary">Shopping Summary</h3>
              </div>
              <div style={{ width: "40%" }}>
                <div className="d-flex justify-content-between">
                  <h3>Subtotal</h3>
                  <h3>{totalPrice} rs.</h3>
                </div>
                <div className="d-flex justify-content-between">
                  <h3>GST</h3>
                  <h3>{gst} rs.</h3>
                </div>
                <div className="d-flex justify-content-between">
                  <h3>Shipping</h3>
                  <h3>Free Delivery</h3>
                </div>
              </div>
            </div>
            <div className="bottom_Line"></div>
            <div
              className="d-flex justify-content-end"
              style={{ width: "90%", margin: "auto" }}
            >
              <div className="d-flex flex-column" style={{ width: "50%" }}>
                <div className="d-flex justify-content-between">
                  <h3 style={{ marginLeft: "8%" }}>Total</h3>
                  <h3 style={{ marginLeft: "8%" }}>
                    {`${totalPrice + gst}`} rs.
                  </h3>
                </div>
                <NavLink to="/bag/address" >
                <button style={{ marginLeft: "8%" }} className="payment_Button">
                  CONTINUE TO PAYMENT
                  </button>

                </NavLink>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 style={{ marinTop: "100px" }}>Cart is empty</h1>
      )}
    </>
  );
};

export default Bag;
