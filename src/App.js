import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import CartPage from "./pages/CartPage/CartPage";
import Footer from "./pages/Footer/Footer";
import MainSection from "./pages/MainPage/MainPage";
import NoPage from "./pages/NoPage/NoPage";
import Login from "./pages/Login/Login";
import StarRating from "./components/StarRating/StarRating";

const App = () => {
    return (
        <>
            <Header />
            <StarRating rating={2.6} starSizePx={55}/>
            <Routes>
                <Route path="/" element={<MainSection />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;