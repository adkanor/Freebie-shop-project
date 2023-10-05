import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./stores/action";
import Header from "./pages/Header/Header";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import CartPage from "./pages/CartPage/CartPage";
import Footer from "./components/Footer/Footer";
import MainSection from "./pages/MainPage/MainPage";
import NoPage from "./pages/NoPage/NoPage";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Pagination from "./components/Pagination/Pagination";
import ProductsByStyle from "./pages/ProductsByStyle/ProductsByStyle";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<MainSection />} />
                <Route path="/:style" element={<ProductsByStyle />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/products/:id" element={<DetailProduct />} />
                {/* <Route path="/footer" element={<Footer />} /> */}
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
            <Pagination />
            <Footer />
        </>
    );
};

export default App;
