import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import CartPage from "./pages/CartPage/CartPage";
import Footer from "./pages/Footer/Footer";
import MainSection from "./pages/MainPage/MainPage";
import NoPage from "./pages/NoPage/NoPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
};

export default App;
