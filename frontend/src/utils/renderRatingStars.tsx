import { StarIcon } from "@heroicons/react/24/solid";

export const renderRatingStars = (
  fixedRating: number,
  size: string = "w-4 h-4"
) => {
  const fullStars = Math.floor(fixedRating);
  const hasHalfStar = fixedRating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <>
      {/* Full stars */}
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <StarIcon
            key={`full-${i}`}
            className={`${size} text-yellow-400 fill-current`}
          />
        ))}

      {/* Half star */}
      {hasHalfStar && (
        <div className={`relative ${size}`}>
          <StarIcon className={`absolute text-gray-300 fill-current ${size}`} />
          <StarIcon
            className={`absolute text-yellow-400 fill-current ${size}`}
            style={{ clipPath: "inset(0 50% 0 0)" }}
          />
        </div>
      )}

      {/* Empty stars */}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <StarIcon key={`empty-${i}`} className={`${size} text-gray-300`} />
        ))}
    </>
  );
};
