import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import HiOutlineSearchBlack from "../../assets/icons/Header/Search-balck.svg";
import SlMenu from "../../assets/icons/Header/Burger-Menu.svg";
import AccountSVG from "../../assets/icons/Header/Account.svg";
import CartSVG from "../../assets/icons/Header/Cart.svg";
import HeartSVG from "../../assets/icons/Header/Heart.svg";
import VscChromeClose from "../../assets/icons/Filter/Close.svg";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [show, setShow] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();

    //hide menu when resizing the window resolution
    useEffect(() => {
        window.addEventListener("resize", () => {
            setMobileMenu(false);
            setShowSearch(false);
            setShow(false);
        });
        return () =>
            window.removeEventListener("resize", () => {
                closeMobileMenu();
            });
    }, [mobileMenu]);

    //lock or unlock scroll
    useEffect(() => {
        if (!showSearch && !mobileMenu) {
            document.body.style.overflow = "visible";
        } else {
            document.body.style.overflow = "hidden";
        }
    }, [mobileMenu, showSearch]);

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            setTimeout(() => {
                navigate(`/search/${query}`);
                setShowSearch(false);

                event.target.value = "";
            }, 1000);
        }
    };

    const openSearch = () => {
        setMobileMenu(false);
        setShowSearch(true);
    };

    const openMobileMenu = () => {
        setMobileMenu(true);
        setShowSearch(false);
    };

    const closeMobileMenu = () => {
        if (document.body.style.overflow === "hidden") {
            setMobileMenu(false);
            setShow(true);
            setShowSearch(false);
        }
    };

    const toggleAnimationMenu = () => {
        if (show) {
            if (mobileMenu) {
                return styles.mobileView;
            } else {
                return styles.mobileViewClose;
            }
        } else {
            if (mobileMenu) {
                return styles.mobileView;
            } else {
                return "";
            }
        }
    };

    return (
        <>
            <div className={styles.notification}>
                <span className={styles.info}>
                    <p>
                        Sign up and get 20% off to your first order.
                        <span>Sign Up Now</span>
                    </p>
                </span>
            </div>
            <div className={styles.sectionHeader}>
                <header className={`${styles.header} ${toggleAnimationMenu()}`}>
                    <div className={styles.wrapper}>
                        <div className={styles.desktopMenuItems}>
                            <ul className={styles.desktopMenuList}>
                                <li
                                    className={styles.desktopItem}
                                    onClick={closeMobileMenu}
                                >
                                    <Link to="test">
                                        <p className={styles.desktopItemText}>
                                            Women
                                        </p>
                                    </Link>
                                </li>
                                <li
                                    className={styles.desktopItem}
                                    onClick={closeMobileMenu}
                                >
                                    <Link to="test">
                                        <p className={styles.desktopItemText}>
                                            Men
                                        </p>
                                    </Link>
                                </li>
                                <li
                                    className={styles.desktopItem}
                                    onClick={closeMobileMenu}
                                >
                                    <Link to="test">
                                        <p className={styles.desktopItemText}>
                                            Brands
                                        </p>
                                    </Link>
                                </li>
                                <li
                                    className={styles.desktopItem}
                                    onClick={closeMobileMenu}
                                >
                                    <Link to="test">
                                        <p className={styles.desktopItemText}>
                                            On Sale
                                        </p>
                                    </Link>
                                </li>
                            </ul>

                            <div
                                className={styles.desktopLogo}
                                onClick={() => navigate("/")}
                            >
                                <p className={styles.logoText}>SHOP.CO</p>
                            </div>

                            <label className={styles.desktopSearchBar}>
                                <input
                                    type="text"
                                    placeholder={"Search for products..."}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyUp={searchQueryHandler}
                                />
                            </label>
                            <div className={styles.desktopSvgs}>
                                <Link to="test">
                                    <img src={AccountSVG} alt="Account SVG" />
                                </Link>
                                <Link to="cart">
                                    <img src={CartSVG} alt="Cart SVG" />
                                </Link>
                                <Link to="test">
                                    <img src={HeartSVG} alt="Heart SVG" />
                                </Link>
                            </div>
                        </div>
                        <div className={styles.mobileMenuItems}>
                            {mobileMenu ? (
                                <>
                                    <div className={styles.mobileMenu}>
                                        <img
                                            src={VscChromeClose}
                                            onClick={closeMobileMenu}
                                            alt="Close SVG"
                                        />
                                        <div
                                            className={styles.mobileLogo}
                                            onClick={() => navigate("/")}
                                        >
                                            <p className={styles.logoText}>
                                                SHOP.CO
                                            </p>
                                        </div>
                                    </div>

                                    <div className={styles.mobileSvgs}>
                                        <img
                                            src={HiOutlineSearchBlack}
                                            onClick={openSearch}
                                            alt="Search SVG"
                                        />
                                        <Link to="test">
                                            <img
                                                src={AccountSVG}
                                                alt="Account SVG"
                                                onClick={closeMobileMenu}
                                            />
                                        </Link>
                                        <Link to="cart">
                                            <img
                                                src={CartSVG}
                                                alt="Cart SVG"
                                                onClick={closeMobileMenu}
                                            />
                                        </Link>
                                        <Link to="test">
                                            <img
                                                src={HeartSVG}
                                                alt="Heart SVG"
                                                onClick={closeMobileMenu}
                                            />
                                        </Link>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className={styles.mobileMenu}>
                                        <img
                                            src={SlMenu}
                                            onClick={openMobileMenu}
                                            alt="Menu SVG"
                                        />
                                        <div
                                            className={styles.mobileLogo}
                                            onClick={() => navigate("/")}
                                        >
                                            <p className={styles.logoText}>
                                                SHOP.CO
                                            </p>
                                        </div>
                                    </div>

                                    <div className={styles.mobileSvgs}>
                                        <img
                                            src={HiOutlineSearchBlack}
                                            onClick={openSearch}
                                            alt="Search SVG"
                                            className={styles.imgLink}
                                        />
                                        <Link to="test">
                                            <img
                                                src={AccountSVG}
                                                alt="Account SVG"
                                                onClick={closeMobileMenu}
                                            />
                                        </Link>
                                        <Link to="cart">
                                            <img
                                                src={CartSVG}
                                                alt="Cart SVG"
                                                onClick={closeMobileMenu}
                                            />
                                        </Link>
                                        <Link to="test">
                                            <img
                                                src={HeartSVG}
                                                alt="Heart SVG"
                                                onClick={closeMobileMenu}
                                            />
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>

                        {showSearch && (
                            <div className={styles.mobileSearchBar}>
                                <div className={styles.mobileSearchInput}>
                                    <input
                                        type="text"
                                        placeholder="Search for products..."
                                        onChange={(e) =>
                                            setQuery(e.target.value)
                                        }
                                        onKeyUp={searchQueryHandler}
                                    />
                                    <img
                                        src={VscChromeClose}
                                        onClick={() => setShowSearch(false)}
                                        alt="Close SVG"
                                        className={styles.imgLink}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </header>
            </div>
        </>
    );
};

export default Header;
