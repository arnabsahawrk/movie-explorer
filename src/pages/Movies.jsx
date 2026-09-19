import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      getMovies(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  async function getMovies(query) {
    setLoading(true);
    setError("");

    try {
      const url = query.trim()
        ? `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`
        : "https://api.tvmaze.com/shows";

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      const shows = query.trim() ? data.map((item) => item.show) : data;
      setMovies(shows);
    } catch (err) {
      setError("Could not load movies. Please try again.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto w-[92%] max-w-6xl flex-1 py-8 sm:py-10">
      <h1 className="mb-2 text-3xl font-bold">Movies</h1>
      <input
        className="mb-6 mt-3 w-full rounded border border-[#aaaaaa] bg-white px-4 py-3 text-base outline-none focus:border-[#aaaaaa]"
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search for a movie..."
      />

      {loading && (
        <p className="rounded border border-[#d5d5d5] bg-white p-5">Loading...</p>
      )}

      {error && (
        <p className="rounded border border-[#d5d5d5] bg-white p-5">{error}</p>
      )}

      {!loading && !error && movies.length === 0 && (
        <p className="rounded border border-[#d5d5d5] bg-white p-5">No movies found.</p>
      )}

      {!loading && !error && movies.length > 0 && (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onDetails={setSelectedMovie}
            />
          ))}
        </div>
      )}

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </section>
  );
}

export default Movies;
