import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#eeeeee] text-[#222222] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <Navbar />
      <main className="flex flex-1 flex-col bg-[#eeeeee]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
