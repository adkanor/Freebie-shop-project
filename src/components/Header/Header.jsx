import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import SlMenu from "../../assets/icons/Header/Burger-Menu.svg";
import HiOutlineSearchBlack from "../../assets/icons/Header/Search-balck.svg";
import VscChromeClose from "../../assets/icons/Filter/Close.svg";
import AccountSVG from "../../assets/icons/Header/Account.svg";
import AccountNotAuth from "../../assets/icons/Header/AccountNotAuth.svg";
import CartSVG from "../../assets/icons/Header/Cart.svg";
import HeartSVG from "../../assets/icons/Header/Heart.svg";
import NavigationBar from "../NavigationBar/NavigationBar";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";
import { useMediaQuery } from "@react-hook/media-query";
import { scrollToTop } from "../../utils/scrollToTop";
import { checkAuthorization } from "../../stores/authorization/actions";
import { defaultParams } from "../../variables";
import { URL } from "../../variables";
import { fetchCartItems } from "../../stores/cartProducts/action";

const Header = () => {
    const [query, setQuery] = useState("");
    const [cartAmount, setCartAmount] = useState(0);
    const [favoriteAmount, setFavoriteAmount] = useState(0);
    const [showNav, setShowNav] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 991px)");
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    const [LiveSearchOpenStatus, SetLiveSearchOpenStatus] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchCartItems());
    }, [dispatch]);

    const favoriteProducts =
        useSelector((state) => state.favoritesReducer.favorites) || {};

    const cartProducts =
        useSelector((state) => state.cartReducer.cartItems) || {};
    const isPersonAuthorised = useSelector(
        (state) => state.authorizationReducer.isAuth
    );
    useEffect(() => {
        dispatch(checkAuthorization(token));
    }, [token, dispatch]);

    useEffect(() => {
        SetLiveSearchOpenStatus(false);
    }, [LiveSearchOpenStatus]);

    useEffect(() => {
        if ((!showNav && !showSearch) || isDesktop) {
            document.body.style.overflow = "visible";
        } else {
            document.body.style.overflow = "hidden";
        }
    }, [showNav, showSearch, isDesktop]);

    useEffect(() => {
        setCartAmount(cartProducts.length);
    }, [cartProducts.length]);

    useEffect(() => {
        setFavoriteAmount(favoriteProducts.length);
    }, [favoriteProducts.length]);

    const isUserAuth = () => {
        const config = {
            headers: {
                Authorization: `${token}`,
            },
        };
        const link = `${URL}isAuth`;
        axios.post((link), "", config).then((res) => {
            if (res.data.status === 200) {
                redirectAccount();
            }
            if (res.data.status !== 200) {
                redirectLogin();
                localStorage.removeItem("token");
            }
        });
    };

    const redirectAccount = () => navigate("/account/info");
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
        SetLiveSearchOpenStatus(true);
        setShowSearch(false);
        setShowNav(false);
    };

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            setTimeout(() => {
                navigate(`${defaultParams}&search=${query}`);
                hideSearch();
            }, 2500);
            hideAll();
        }
    };
    return (
        <>
            <div className={styles.notification}>
                <span className={styles.info}>
                    <p>
                        Sign up for special offers and discounts!
                        <Link
                            to="login"
                            onClick={() => {
                                hideAll();
                                scrollToTop();
                            }}
                            className={styles.infoLink}
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
                                    classList={`${styles.responsiveNav} ${styles.animationList} ${styles.desktopMenuList}`}
                                    clickFunc={hideAll}
                                    data-testid="navigation-menu"
                                />
                            ) : (
                                <NavigationBar
                                    classList={styles.desktopMenuList}
                                    clickFunc={hideAll}
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
                                        classList={`${styles.responsiveSearch} ${styles.animationList} ${styles.desktopSearchBar}`}
                                        onChangeFunc={(e) =>
                                            setQuery(e.target.value)
                                        }
                                        onKeyUpFunc={(e) =>
                                            searchQueryHandler(e)
                                        }
                                        closeTabsFunc={hideAll}
                                        LiveSearchStatus={LiveSearchOpenStatus}
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
                                        closeTabsFunc={hideAll}
                                        LiveSearchStatus={LiveSearchOpenStatus}
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
                                        data-testid="menu-button"
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
                                    {token ? (
                                        <img
                                            src={AccountSVG}
                                            alt="Account SVG"
                                        />
                                    ) : (
                                        <img
                                            src={AccountNotAuth}
                                            alt="Account SVG"
                                        />
                                    )}
                                </Link>
                                <Link
                                    to="cart"
                                    className={styles.svgRel}
                                    onClick={() => {
                                        hideAll();
                                    }}
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
                                {isPersonAuthorised ? (
                                    <Link
                                        to="favourites"
                                        onClick={hideAll}
                                        className={styles.svgRel}
                                    >
                                        <img src={HeartSVG} alt="Heart SVG" />
                                        {favoriteAmount > 0 && (
                                            <span id={styles["abs"]}>
                                                <p className={styles.new}>
                                                    {favoriteAmount}
                                                </p>
                                            </span>
                                        )}
                                    </Link>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
};

export default Header;
