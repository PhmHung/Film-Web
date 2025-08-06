import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import { Route, Routes, useLocation } from "react-router-dom";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import MyBookings from "./pages/MyBookings";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith("/admin");

  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/:date" element={<MyBookings />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
};

// const App = () => {
//   return (
//     <>
//       <h1>App is working</h1>
//       <Navbar />
//     </>
//   );
// };

export default App;
