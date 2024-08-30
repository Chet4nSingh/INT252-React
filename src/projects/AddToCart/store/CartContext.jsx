import { createContext, useContext, useReducer } from "react";

const CartContext = createContext({
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
    cartItems: [
        {
            id: 1,
            name: "Elegant Evening Gown",
            image: "src/assets/react-shop/aiony-haust-IXYxqP4zejo-unsplash.jpg",
            price: 299.99,
            ratings: 4,
            description:
              "A stunning floor-length evening gown, perfect for formal occasions. Made from premium satin with intricate lace details.",
          },
          {
            id: 2,
            name: "Casual Denim Jacket",
            image: "src/assets/react-shop/cesar-la-rosa-MI6UcceQTFY-unsplash.jpg",
            price: 89.99,
            ratings: 5,
            description:
              "A versatile and stylish denim jacket, great for layering in the fall or spring. Features a comfortable fit with a classic look.",
          },
    ],
  });

  function addItems(item) {
    cartDispatch({ type: "ADD_ITEM", payload: { item } });
  }

  const cartCtx = {
    items: cartState.cartItems,
    addItems,
  }

  return <CartContext.Provider value={cartCtx}>{children}</CartContext.Provider>;
}

export default CartContext;
