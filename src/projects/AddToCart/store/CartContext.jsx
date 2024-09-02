import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
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

  function addItem(item) {
    cartDispatch({ type: "ADD_ITEM", payload: { item } });
  }

  const cartCtx = {
    items: cartState.cartItems,
    addItem,
  };

  return (
    <CartContext.Provider value={cartCtx}>{children}</CartContext.Provider>
  );
}

export default CartContext;
