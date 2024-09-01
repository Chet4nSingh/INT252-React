import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";

export default function Cart() {
  const {items} = useContext(CartContext);

  return (
    <Modal>
      <h1 className="text-4xl">Your Cart</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name} - {item.price}</li>
        ))}
      </ul>
    </Modal>
  );
}
