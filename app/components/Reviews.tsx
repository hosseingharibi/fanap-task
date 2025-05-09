import Rating from "./Rating";
import { formatDate } from "~/helpers";
import type { Reviews } from "~/types/product";

interface ReviewsProps {
  reviews: Reviews[];
  rating: number;
}

export default function Reviews({ reviews, rating }: ReviewsProps) {
  return (
    <section className="bg-white py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-semibold text-gray-900">Reviews</h2>

          <div className="mt-2 flex items-center gap-2 sm:mt-0">
            <Rating rating={rating} />

            <span className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline">
              {reviews.length} Reviews
            </span>
          </div>
        </div>

        <div className="mt-6 divide-y divide-gray-200">
          {reviews?.length &&
            reviews.map((review, index) => (
              <div key={index} className="gap-3 pb-3 mb-3 sm:flex sm:items-start">
                <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
                  <Rating rating={review.rating} />

                  <div className="space-y-0.5">
                    <p className="text-base font-semibold text-gray-900">{review.reviewerName}</p>
                    <p className="text-sm font-normal text-gray-500">{formatDate(review.date)}</p>
                  </div>
                </div>

                <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
                  <p className="text-base font-normal text-gray-500">{review.comment}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
