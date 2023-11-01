import React from "react";
import styles from "./EditProfile.module.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import AdaptiveNav from "../../components/AdaptiveNav/AdaptiveNav";
import { useDispatch } from "react-redux";
import { clearCart } from "../../stores/cartProducts/action";
function EditProfile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSignOut = () => {
        localStorage.removeItem("token");
        dispatch(clearCart());
        navigate("/login");
    };
    return (
        <>
            <section className="section">
                <AdaptiveNav
                    linksObj={{
                        home: "/",
                        account: "/account",
                    }}
                />
                <nav className={styles.accountNav}>
                    <ul className={styles.accountNavList}>
                        <li className={styles.accountNavItem}>
                            <Link
                                className={styles.accountNavLink}
                                to="/account/info"
                            >
                                Personal Info
                            </Link>
                        </li>
                        <li className={styles.accountNavItem}>
                            <Link
                                className={styles.accountNavLink}
                                to="/account/contact"
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li className={styles.accountNavItem}>
                            <Link
                                className={styles.accountNavLink}
                                to="/account/orders"
                            >
                                Orders
                            </Link>
                        </li>
                    </ul>
                    <p
                        className={styles.accountActionSignOut}
                        onClick={handleSignOut}
                    >
                        Sign out
                    </p>
                </nav>
                <Outlet />
            </section>
        </>
    );
}

export default EditProfile;
