import { useContext, useState } from "react";
import Cart from "./Cart";
import CartContext from "../store/CartContext";

export default function Header() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const {items} = useContext(CartContext);

  return (
    <>
      <Cart open={cartIsOpen} onCloseCart={() => setCartIsOpen(false)} />
      <header className="text-white flex justify-between items-center p-8 pr-16">
        <h1 className="text-8xl inline">React Shop</h1>
        <div>
          <button onClick={() => setCartIsOpen(true)} className="text-4xl px-4 py-2 pb-3 bg-sky-600 hover:bg-sky-700 rounded-lg">
            Cart ({items.length})
          </button>
        </div>
      </header>
    </>
  );
}
