import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

import SlMenu from "../../assets/icons/Header/Burger-Menu.svg";
import HiOutlineSearchBlack from "../../assets/icons/Header/Search-balck.svg";
import VscChromeClose from "../../assets/icons/Filter/Close.svg";
import AccountSVG from "../../assets/icons/Header/Account.svg";
import CartSVG from "../../assets/icons/Header/Cart.svg";
import HeartSVG from "../../assets/icons/Header/Heart.svg";

import NavigationBar from "./NavigationBar/NavigationBar";
import SearchBar from "./SearchBar/SearchBar";

const Header = () => {
    const [query, setQuery] = useState("");
    const [showNav, setShowNav] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!showNav && !showSearch) {
            document.body.style.overflow = "visible";
        } else {
            document.body.style.overflow = "hidden";
        }
    }, [showNav, showSearch]);

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
                        Sign up and get 20% off to your first order.
                        <Link to="login" onClick={hideAll}>
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

                                <Link to="test" onClick={hideAll}>
                                    <img src={AccountSVG} alt="Account SVG" />
                                </Link>
                                <Link to="cart" onClick={hideAll}>
                                    <img src={CartSVG} alt="Cart SVG" />
                                </Link>
                                <Link to="test" onClick={hideAll}>
                                    <img src={HeartSVG} alt="Heart SVG" />
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
