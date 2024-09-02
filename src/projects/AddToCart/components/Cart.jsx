import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";

export default function Cart({ open, onCloseCart }) {
  const { items } = useContext(CartContext);

  return (
    <Modal open={open} onCloseCart={onCloseCart}>
      <div className="flex justify-between items-start">
        <h1 className="text-4xl mb-8">Your Cart</h1>
        <button onClick={onCloseCart} className="text-2xl outline-none">
          X
        </button>
      </div>
      {items.length === 0 && <p className="text-xl">Your cart is empty</p>}
      {items.length > 0 && (
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              className="text-xl mb-4 p-4 w-full border flex justify-between"
            >
              <span>
                {item.name} - {item.price}
              </span>
              <span>{6}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="text-right">
        <button className="my-8 text-lg border px-4 py-2">Checkout</button>
      </div>
    </Modal>
  );
}
