import { useContext } from "react";
import { FASHION_PRODUCTS } from "../fashion-products";
import CartContext from "../store/CartContext";

export default function Products() {
  const {addItem} = useContext(CartContext);

  return (
    <ul className="w-[90%] mx-auto grid grid-cols-3 gap-8">
      {FASHION_PRODUCTS.map((product) => (
        <li key={product.id} className="text-white border-opacity-50 relative group">
          <div className="h-full">
            <img className="h-full" src={product.image} alt="fashion product" />
          </div>
          <div
            id="details"
            className="w-full p-4 pt-8 absolute bottom-0 bg-gradient-to-t from-black opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-300 "
          >
            <h2 className="text-2xl">{product.name}</h2>
            <p className="text-xl">${product.price}</p>
            <p className="text-xl flex justify-between">
              <span className="pt-2">
                <span>{product.ratings}.0</span> {"⭐".repeat(product.ratings)}
              </span>
              <button onClick={() => addItem(product)} className="text-4xl pb-2 hover:scale-125 duration-100">
                +
              </button>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
