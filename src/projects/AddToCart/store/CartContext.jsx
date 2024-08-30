import { useContext, useReducer } from "react";

const CartContext = useContext({
  items: [],
  addItems: () => {},
  removeItems: () => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.cartItems, action.payload.item];
    return {
      ...state,
      cartItems: updatedItems,
    };
  }
  return state;
}

export function CartContextProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cartItems: [],
  });

  function addItems(item) {
    cartDispatch({ type: "ADD_ITEM", payload: { item } });
  }

  cartCtx = {
    items: cartState.cartItems,
    addItems,
  }

  return <CartContext.Provider value={cartCtx}>{children}</CartContext.Provider>;
}

export default CartContext;
