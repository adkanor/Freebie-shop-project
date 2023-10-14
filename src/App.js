import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import CartPage from "./pages/CartPage/CartPage";
import Footer from "./components/Footer/Footer";
import MainSection from "./pages/MainPage/MainPage";
import NoPage from "./pages/NoPage/NoPage";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import ProductsByStyle from "./pages/ProductsByStyle/ProductsByStyle";
import CheckOut from "./pages/CheckOut/CheckOut";
import { ToastContainer } from "react-toastify";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage";
const App = () => {
    return (
        <>
            <Header />
            <ToastContainer />
            <Routes>
                <Route path="/" element={<MainSection />} />
                <Route path="/:style" element={<ProductsByStyle />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/favourites" element={<FavouritesPage />} />
                <Route path="/checkout" element={<CheckOut />} />
                <Route path="/products/:id" element={<DetailProduct />} />
                {/* <Route path="/footer" element={<Footer />} /> */}
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
