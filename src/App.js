import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import CartPage from "./pages/CartPage/CartPage";
import Footer from "./components/Footer/Footer";
import MainSection from "./pages/MainPage/MainPage";
import NoPage from "./pages/NoPage/NoPage";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import ClosedProductCard from "./components/ClosedProductCard/ClosedProductCard";

const App = () => {
    return (
        <>
            <Header />
            <ClosedProductCard name="T-shirt" price={199.99} imageURL={""} SKU={1} rating={2.3}/>
            <Routes>
                <Route path="/" element={<MainSection />} />
                <Route path="/cart" element={<CartPage />} />
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