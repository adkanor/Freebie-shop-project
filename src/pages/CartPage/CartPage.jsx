import React from "react";
import { Link } from "react-router-dom";
import Separator from "../../components/Separator/Separator.jsx";
// import styles from "./CartPage.module.css";
const CartPage = () => {


  return <>
    <Separator/>
    <div className="section">
      <nav className="beadcrumbs">
        <ul className="breadcrumbs-list">
          <li className="breadcrumb-item"> <Link to="/" className="breadcrumb-link">Home</Link></li>
          <li className="breadcrumb-item"> <Link to="/cart" className="breadcrumb-link">Cart</Link></li>
        </ul>
      </nav>
    </div>
  
  
  </>;

};

export default CartPage;
