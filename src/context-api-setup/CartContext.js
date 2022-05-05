import React, { createContext, useContext, useReducer } from "react";
import cartReducer from "./cartReducer";
import itemsReducer from "./itemsReducer";
import sellerProductUploadReducer from "./sellerProductUploadReducer";
import wishlistReducer from "./wishlistReducer";

export const Context = createContext();

function CartContext({ children }) {
  const [PrdUplState, PrdUplDispatch] = useReducer(
    sellerProductUploadReducer,
    {}
  );
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cartItems: [],
  });

  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    copyOfCartItems: [],
  });
  const [itemsState, itemsDispatch] = useReducer(itemsReducer, []);
  return (
    <Context.Provider
      value={{
        cartState,
        cartDispatch,
        wishlistState,
        wishlistDispatch,
        PrdUplState,
        PrdUplDispatch,
        itemsState,
        itemsDispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default CartContext;

export const UseCart = () => {
  return useContext(Context);
};
