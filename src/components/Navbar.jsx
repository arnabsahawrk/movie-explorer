import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#222222] px-5 py-4 text-white sm:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link className="text-xl font-bold" to="/">
          Movie Explorer
        </Link>
        <Link
          className="rounded bg-[#e2b93b] px-4 py-2 font-medium text-[#222222] hover:brightness-95"
          to="/movies"
        >
          Movies
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
