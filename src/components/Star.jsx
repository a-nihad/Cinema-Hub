const Star = ({ rating, onRating }) => {
  return (
    <div className="space-x-1">
      {Array.from({ length: 10 }, (_, index) => (
        <button
          className="text-yellow"
          onClick={() => onRating(index + 1)}
          key={index}
        >
          {rating >= index + 1 ? (
            <i className="fa-solid fa-star"></i>
          ) : (
            <i className="fa-regular fa-star"></i>
          )}
        </button>
      ))}
    </div>
  );
};

export default Star;
