import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const Rating = ({ rating }) => {
  // Ensure the rating is clamped between 1 and 5
  const normalizedRating = Math.max(1, Math.min(5, rating));

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        const fullStarIndex = index + 1; // Rating starts from 1, not 0
        if (normalizedRating >= fullStarIndex) {
          // Full star
          return (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              className="text-yellow-500"
            />
          );
        } else if (normalizedRating + 0.5 >= fullStarIndex) {
          // Half star
          return (
            <FontAwesomeIcon
              key={index}
              icon={faStarHalfAlt}
              className="text-yellow-500"
            />
          );
        } else {
          // Empty star
          return (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              className="text-gray-300"
            />
          );
        }
      })}
    </div>
  );
};

export default Rating;
