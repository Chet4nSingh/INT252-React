import { FASHION_PRODUCTS } from "../fashion-products";

export default function Products() {
  return (
    <ul className="w-[90%] mx-auto grid grid-cols-3 gap-8">
      {FASHION_PRODUCTS.map((product) => (
        <li key={product.id} className="text-white border relative group">
          <div className="h-full">
            <img className="h-full" src={product.image} alt="fashion product" />
          </div>
          <div className="w-full p-4 absolute bottom-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-300 ">
            <h2 className="text-2xl">{product.name}</h2>
            <p className="text-xl">{product.price}</p>
            <p className="text-xl"><span>{product.ratings}.0</span> {"⭐".repeat(product.ratings)}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
