import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import EditProfile from "./pages/Header/EditProfile/EditProfile";
import CartPage from "./pages/CartPage/CartPage";
import Footer from "./components/Footer/Footer";
import MainSection from "./pages/MainPage/MainPage";
import NoPage from "./pages/NoPage/NoPage";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<MainSection />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/EditProfile" element={<EditProfile />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
