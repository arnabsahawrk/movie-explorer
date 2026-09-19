function MovieCard({ movie, onDetails }) {
  const year = movie.premiered ? movie.premiered.slice(0, 4) : "Unknown";
  const rating = movie.rating && movie.rating.average ? movie.rating.average : "N/A";
  const image = movie.image && movie.image.medium ? movie.image.medium : "/no-image.svg";

  return (
    <article className="overflow-hidden rounded border border-[#d5d5d5] bg-white">
      <img
        className="block h-80 w-full bg-[#d0d0d0] object-cover"
        src={image}
        alt={movie.name}
      />
      <div className="p-4">
        <h3 className="mb-2 min-h-12 text-lg font-semibold">{movie.name}</h3>
        <p className="mb-4 text-sm text-[#555555]">
          ⭐ {rating} <span className="px-1">•</span> 📅 {year}
        </p>
        <button
          className="rounded bg-[#e2b93b] px-4 py-2 font-medium text-[#222222] hover:brightness-95"
          type="button"
          onClick={() => onDetails(movie)}
        >
          See Details
        </button>
      </div>
    </article>
  );
}

export default MovieCard;
