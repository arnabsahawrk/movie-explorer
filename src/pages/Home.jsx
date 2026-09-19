import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="flex flex-1 items-center bg-linear-to-br from-[#26384d] to-[#526c88] px-5 py-10 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex min-h-115 flex-col items-center justify-center rounded px-6 py-12 text-center text-white">
          <h1 className="mb-3 text-4xl font-bold sm:text-5xl">Discover Movies</h1>
          <p className="mb-6 max-w-xl leading-7">
            Explore shows from around the world, search for your favorite titles, and see their
            details in one place.
          </p>
          <Link
            className="rounded bg-[#e2b93b] px-5 py-3 font-medium text-[#222222] hover:brightness-95"
            to="/movies"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
