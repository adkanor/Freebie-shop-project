import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import SlMenu from "../../assets/icons/Header/Burger-Menu.svg";
import HiOutlineSearchBlack from "../../assets/icons/Header/Search-balck.svg";
import VscChromeClose from "../../assets/icons/Filter/Close.svg";
import AccountSVG from "../../assets/icons/Header/Account.svg";
import CartSVG from "../../assets/icons/Header/Cart.svg";
import HeartSVG from "../../assets/icons/Header/Heart.svg";
import NavigationBar from "../NavigationBar/NavigationBar";
import SearchBar from "../SearchBar/SearchBar";
import { scrollToTop } from "../../utils/scrollToTop";
import axios from "axios";

const Header = () => {
    const [query, setQuery] = useState("");
    const [cartAmount, setCartAmount] = useState(0);
    const [favoriteAmount, setFavoriteAmount] = useState(0);
    const [showNav, setShowNav] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate();

    const favoriteProducts = useSelector(
        (state) => state.favoritesReducer.favorites
    );

    const cartProducts = useSelector((state) => state.cartReducer.cartItems);

    useEffect(() => {
        if (!showNav && !showSearch) {
            document.body.style.overflow = "visible";
        } else {
            document.body.style.overflow = "hidden";
        }
    }, [showNav, showSearch]);

    useEffect(() => {
        setCartAmount(cartProducts.length);
    }, [cartProducts]);

    useEffect(() => {
        setFavoriteAmount(favoriteProducts.length);
    }, [favoriteProducts]);

    const isUserAuth = () => {
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                Authorization: `${token}`,
            },
        };
        axios
            .post(
                "https://shopcoserver-git-main-chesterfalmen.vercel.app/api/isAuth",
                "",
                config
            )
            .then((res) => {
                if (res.data.status === 200) {
                    redirectAccount();
                }
                if (res.data.status !== 200) {
                    redirectLogin();
                }
            });
    };
    const redirectAccount = () => navigate("/account");
    const redirectLogin = () => navigate("/login");

    const toggleNav = () => {
        setShowNav(!showNav);
        hideSearch();
    };

    const toggleSearch = () => {
        setShowSearch(!showSearch);
        hideNav();
    };

    const hideNav = () => {
        setShowNav(false);
    };

    const hideSearch = () => {
        setShowSearch(false);
    };

    const hideAll = () => {
        setShowSearch(false);
        setShowNav(false);
    };

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            setTimeout(() => {
                navigate(`/search/${query}`);
                hideSearch();
                event.target.value = "";
            }, 1000);
        }
    };
    return (
        <>
            <div className={styles.notification}>
                <span className={styles.info}>
                    <p>
                        Sign up and get promo code for order.
                        <Link
                            to="login"
                            onClick={() => {
                                hideAll();
                                scrollToTop();
                            }}
                        >
                            <span>Sign Up Now</span>
                        </Link>
                    </p>
                </span>
            </div>
            <div className={styles.sectionHeader}>
                <header className={styles.header}>
                    <div className={styles.wrapper}>
                        <div className={styles.desktopMenuItems}>
                            {showNav ? (
                                <NavigationBar
                                    classList={`${styles.responsiveNav} ${styles.q} ${styles.desktopMenuList}`}
                                    clickFunc={hideNav}
                                />
                            ) : (
                                <NavigationBar
                                    classList={styles.desktopMenuList}
                                    clickFunc={hideNav}
                                />
                            )}

                            <div className={styles.mobileItems}>
                                <div
                                    className={styles.desktopLogo}
                                    onClick={() => {
                                        navigate("/");
                                        hideAll();
                                    }}
                                >
                                    <p className={styles.logoText}>SHOP.CO</p>
                                </div>
                                {showSearch ? (
                                    <SearchBar
                                        classList={`${styles.responsiveSearch} ${styles.q} ${styles.desktopSearchBar}`}
                                        onChangeFunc={(e) =>
                                            setQuery(e.target.value)
                                        }
                                        onKeyUpFunc={(e) =>
                                            searchQueryHandler(e)
                                        }
                                    />
                                ) : (
                                    <SearchBar
                                        classList={styles.desktopSearchBar}
                                        onChangeFunc={(e) =>
                                            setQuery(e.target.value)
                                        }
                                        onKeyUpFunc={(e) =>
                                            searchQueryHandler(e)
                                        }
                                    />
                                )}

                                {showNav ? (
                                    <img
                                        className={styles.navBtn}
                                        src={VscChromeClose}
                                        onClick={hideNav}
                                        alt="Close SVG"
                                    />
                                ) : (
                                    <img
                                        className={styles.navBtn}
                                        src={SlMenu}
                                        onClick={toggleNav}
                                        alt="Menu SVG"
                                    />
                                )}
                            </div>
                            <div className={styles.desktopSvgs}>
                                {!showSearch ? (
                                    <img
                                        className={styles.navBtn}
                                        src={HiOutlineSearchBlack}
                                        onClick={toggleSearch}
                                        alt="Search SVG"
                                    />
                                ) : (
                                    <img
                                        className={styles.navBtn}
                                        src={VscChromeClose}
                                        onClick={hideSearch}
                                        alt="Close SVG"
                                    />
                                )}

                                <Link
                                    onClick={() => {
                                        hideAll();
                                        isUserAuth();
                                    }}
                                >
                                    <img src={AccountSVG} alt="Account SVG" />
                                    <span className={styles.notAbs}></span>
                                </Link>
                                <Link
                                    to="cart"
                                    className={styles.svgRel}
                                    onClick={hideAll}
                                >
                                    <img src={CartSVG} alt="Cart SVG" />
                                    {cartAmount > 0 && (
                                        <span id={styles["abs"]}>
                                            <p className={styles.new}>
                                                {cartAmount}
                                            </p>
                                        </span>
                                    )}
                                </Link>
                                <Link
                                    to="favourites"
                                    onClick={hideAll}
                                    className={styles.svgRel}
                                >
                                    <img src={HeartSVG} alt="Heart SVG" />
                                    {favoriteAmount > 0 ? (
                                        <span id={styles["abs"]}>
                                            <p className={styles.new}>
                                                {favoriteAmount}
                                            </p>
                                        </span>
                                    ) : null}
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
};

export default Header;
