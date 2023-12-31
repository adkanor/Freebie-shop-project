import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import CartPage from "./pages/CartPage/CartPage";
import Footer from "./components/Footer/Footer";
import MainSection from "./pages/MainPage/MainPage";
import NoPage from "./pages/NoPage/NoPage";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import CheckOut from "./pages/CheckOut/CheckOut";
import { ToastContainer } from "react-toastify";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage";
import EditProfile from "./pages/EditProfile/EditProfile";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import ContactUs from "./components/ContactUs/ContactUs";
import ListOrders from "./components/ListOrders/ListOrders";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import About from "./pages/About/About";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import Brands from "./pages/Brands/Brands";
import ProductsWithFiltersAndSorting from "./pages/ProductsWithFiltersAndSorting/ProductsWithFiltersAndSorting";
import OtherProductPage from "./pages/OtherProductPage/OtherProductPage";

const App = () => {
    return (
        <>
            <Header />
            <ToastContainer limit={3} autoClose={1500} position="bottom-left" />
            <Routes>
                <Route path="/" element={<MainSection />} />

                <Route
                    path="/allproducts"
                    element={<ProductsWithFiltersAndSorting />}
                />
                <Route path="/otherproduct" element={<OtherProductPage />} />

                <Route path="/cart" element={<CartPage />} />

                <Route path="/favourites" element={<FavouritesPage />} />
                <Route path="/cart/checkout" element={<CheckOut />} />
                <Route path="/products/:id" element={<DetailProduct />} />
                <Route path="/account" element={<EditProfile />}>
                    <Route index element={<PersonalInfo />} />
                    <Route path="info" element={<PersonalInfo />} />
                    <Route path="contact" element={<ContactUs />} />
                    <Route path="orders" element={<ListOrders />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/forgotPassword" element={<ForgotPassword />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route
                    path="/terms-&-conditions"
                    element={<TermsAndConditions />}
                />
                <Route path="/brands" element={<Brands />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
