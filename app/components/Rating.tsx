import React from "react";

interface StarProps {
  type?: "full" | "half";
  className?: string;
}

interface RatingProps {
  rating: number;
  maxStars?: number;
}

const Star: React.FC<StarProps> = ({ type = "full", className = "" }) => {
  const pathD =
    "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z";

  return (
    <svg
      aria-hidden="true"
      className={`h-5 w-5 ${className}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      {type === "half" ? (
        <>
          <defs>
            <linearGradient id="halfFill">
              <stop offset="50%" stopColor="gold" />
              <stop offset="50%" stopColor="lightgray" />
            </linearGradient>
          </defs>
          <path fill="url(#halfFill)" d={pathD} />
        </>
      ) : (
        <path d={pathD} />
      )}
    </svg>
  );
};

const Rating: React.FC<RatingProps> = ({ rating, maxStars = 5 }) => {
  const clampedRating = Math.min(Math.max(rating, 0), maxStars);
  const fullStars = Math.floor(clampedRating);
  const hasHalfStar = clampedRating % 1 >= 0.5;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div
      className="flex items-center"
      aria-label={`Rating: ${clampedRating} out of ${maxStars} stars`}
    >
      {Array.from({ length: fullStars }).map((_, i) => (
        <span key={`full-${i}`}>
          <Star type="full" className="text-yellow-300" />
        </span>
      ))}
      {hasHalfStar && (
        <span key="half">
          <Star type="half" className="text-yellow-300" />
        </span>
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <span key={`empty-${i}`}>
          <Star type="full" className="text-gray-300" />
        </span>
      ))}
    </div>
  );
};

export default Rating;