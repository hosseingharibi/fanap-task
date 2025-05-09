import type { Product } from "~/types/product";
import { Link } from "react-router";
import Rating from "./Rating";
import Reviews from "./Reviews";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { title, thumbnail, rating, reviews, tags, price, category, description, discountPercentage } = product;

  return (
    <>
      <nav className="flex py-4 px-4">
        <ol role="list" className="flex items-center">
          <li className="text-left">
            <div className="-m-1">
              <Link
                to="/"
                title="Home"
                className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
              >
                Home
              </Link>
            </div>
          </li>

          <li className="text-left">
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <div className="-m-1">
                <span
                  className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                  aria-current="page"
                >
                  {category}
                </span>
              </div>
            </div>
          </li>
        </ol>
      </nav>

      <section className="py-4 bg-white md:py-16 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <img className="w-full" src={thumbnail} alt={title} />
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">{title}</h1>

              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl">${price}</p>

                {discountPercentage && (
                  <span className="ml-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                    {discountPercentage}% OFF
                  </span>
                )}

                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <Rating rating={rating} />

                  <span className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline">
                    {reviews.length || 0} Reviews
                  </span>
                </div>
              </div>

              <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                <button
                  title="Add to favorites"
                  className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 cursor-pointer"
                  role="button"
                >
                  <svg
                    className="w-5 h-5 -ms-2 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                    />
                  </svg>
                  Add to favorites
                </button>

                <button
                  title="Add to cart"
                  className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 cursor-pointer"
                  role="button"
                >
                  <svg
                    className="w-5 h-5 -ms-2 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    />
                  </svg>
                  Add to cart
                </button>
              </div>

              <hr className="my-6 md:my-8 border-gray-200" />

              <p className="mb-6 text-gray-500">{description}</p>

              <div>
                <h2 className="mt-8 text-base text-gray-900 font-semibold">Category:</h2>
                <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                  <span className="rounded-lg border border-black px-6 py-2 font-bold text-sm">{category}</span>
                </div>

                <h2 className="mt-8 text-base text-gray-900 font-semibold">Tags:</h2>
                <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                  {tags.map((tag) => (
                    <span key={tag} className="rounded-lg border border-black px-6 py-2 font-bold text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reviews reviews={reviews} rating={rating} />
    </>
  );
}
