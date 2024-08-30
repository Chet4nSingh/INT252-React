import { useContext } from "react";

const CartContext = useContext({
    items: [],
    addItems: () => {},
    removeItems: () => {},
});

export function CartContextProvider({ children }) {    
    return <CartContext.Provider>{ children }</CartContext.Provider>
}

export default CartContext;