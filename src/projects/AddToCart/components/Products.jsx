import { FASHION_PRODUCTS } from "../fashion-products";

export default function Products() {
  return (
    <ul className="w-[90%] mx-auto grid grid-cols-3 gap-8">
      {FASHION_PRODUCTS.map((product) => (
        <li key={product.id} className="text-white border relative">
          <div className="h-full">
            <img className="h-full" src={product.image} alt="fashion product" />
          </div>
        </li>
      ))}
    </ul>
  );
}
