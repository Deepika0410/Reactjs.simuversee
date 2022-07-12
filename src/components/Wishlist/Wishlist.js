import React from "react";
import "./Wishlist.css";
import { UseCart } from "../../context-api-setup/CartContext";
import CancelIcon from "@material-ui/icons/Cancel";
import { wishlistAction } from "../../context-api-setup/wishlistReducer";
import { NavLink } from "react-router-dom";
import Base from "../Base";

const Wishlist = () => {
  const {
    wishlistState: { copyOfCartItems },
    wishlistDispatch,
  } = UseCart();
  console.log(copyOfCartItems);
  return (
    <>
      <Base>
        {copyOfCartItems.length > 0 ? (
          <div className="wishlist_MainCont">
            <div className="wishItem_Count">
              <h3 className="heading">
                My WishList ({copyOfCartItems.length}) items
              </h3>
              <div className="whishListContainer">
                {copyOfCartItems?.map((item) => {
                  console.log(item);
                  return (
                    <div className="selectedItemContainer" key={item.id}>
                      <div className="img-container">
                        <NavLink
                          to={"/store/product"}
                          state={{ id: item.id, title: item.name }}
                        >
                          <img
                            src={`${item.image}`}
                            alt="/"
                            className="img"
                          />
                        </NavLink>
                        <button
                          className="cencel-button"
                          onClick={() =>
                            wishlistDispatch({
                              type: wishlistAction.REMOVE_FROM_WISHLIST,
                              payload: item,
                            })
                          }
                        >
                          <CancelIcon />
                        </button>
                      </div>
                      <h3>{item.name}</h3>
                      <h4>{item.description}</h4>
                      <h3>{item.price} rs.</h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <h3 className="wishlist">Wishlist Is empty</h3>
        )}
      </Base>
    </>
  );
};

export default Wishlist;
