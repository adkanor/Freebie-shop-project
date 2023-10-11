import React from "react";
import {Routes, Route} from "react-router-dom";
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
import EditProfile from "./pages/EditProfile/EditProfile";



const App = () => {


    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<MainSection/>}/>
                <Route path="/:style" element={<ProductsByStyle/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/checkout" element={<CheckOut/>}/>
                <Route path="/products/:id" element={<DetailProduct/>}/>
                {/* <Route path="/footer" element={<Footer />} /> */}
                <Route path="/EditProfile" element={<EditProfile />} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/footer" element={<Footer/>}/>
                <Route path="*" element={<NoPage/>}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default App;
