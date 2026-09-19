function MovieModal({ movie, onClose }) {
  if (!movie) {
    return null;
  }

  const image =
    movie.image && movie.image.original
      ? movie.image.original
      : movie.image && movie.image.medium
        ? movie.image.medium
        : "/no-image.svg";

  const rating = movie.rating && movie.rating.average ? movie.rating.average : "N/A";
  const year = movie.premiered ? movie.premiered.slice(0, 4) : "Unknown";
  const genres = movie.genres && movie.genres.length ? movie.genres.join(", ") : "Not available";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded bg-white scrollbar-none [&::-webkit-scrollbar]:hidden"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="absolute right-3 top-3 h-9 w-9 rounded-full bg-white text-lg"
          type="button"
          onClick={onClose}
        >
          ✕
        </button>
        <img
          className="block h-64 w-full bg-[#d0d0d0] object-cover sm:h-80"
          src={image}
          alt={movie.name}
        />
        <div className="p-5 sm:p-6">
          <h2 className="mb-3 text-2xl font-bold">{movie.name}</h2>
          <p className="mb-3 text-[#444444]">
            ⭐ Rating: {rating} <span className="px-1">|</span> 📅 Release: {year}
          </p>
          <p className="mb-5">
            <strong>Genre:</strong> {genres}
          </p>
          <h3 className="mb-2 text-lg font-semibold">Overview</h3>
          <div
            className="leading-7 text-[#444444]"
            dangerouslySetInnerHTML={{
              __html: movie.summary || "No summary available.",
            }}
          />
          <button
            className="mt-5 rounded bg-[#e2b93b] px-4 py-2 font-medium text-[#222222] hover:brightness-95"
            type="button"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
