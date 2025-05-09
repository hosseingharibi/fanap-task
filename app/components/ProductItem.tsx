import { Link } from "react-router";
import Rating from "./Rating";
import type { Product } from "~/types/product";

interface ProductItemProps {
  product: Product;
}

export default function ProductItem({ product }: ProductItemProps) {
  const { id, title, thumbnail, rating, discountPercentage, price } = product;

  return (
    <Link to={`/products/${id}`} title={title} className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
      <div className="relative mx-3 mt-3 flex items-center justify-center h-60 overflow-hidden rounded-xl">
        <img className="object-cover" src={thumbnail} alt={title} />
        {discountPercentage && (
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            {discountPercentage}% OFF
          </span>
        )}
      </div>
      <div className="mt-4 px-5 pb-5">
        <h5 className="text-xl tracking-tight text-slate-900">{title}</h5>

        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">${price}</span>
          </p>

          <Rating rating={rating} />
        </div>
        <span
          title="Detail"
          className="x flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Detail
        </span>
      </div>
    </Link>
  );
}
