import React, { useState } from "react";
import { useFormik } from "formik";
import styles from "./EditProfile.module.css";
import { Link } from "react-router-dom";
import arrow from "../../assets/icons/Cart/arrow-right-bold.svg";
import Button from "../../components/Button/Button.jsx";

function EditProfile() {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
    const [submitClicked, setSubmitClicked] = useState(false);
    const [passwordMismatch, setPasswordMismatch] = useState(false);

    const formik = useFormik({
        initialValues: {
            firstName: "",
            secondName: "",
            email: "",
            address: "",
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: "",
        },
        validate: (values) => {
            const errors = {};

            if (values.newPassword !== values.confirmNewPassword) {
                errors.confirmNewPassword = "Passwords do not match.";
            }

            if (!/^[a-zA-Z]+$/.test(values.firstName)) {
                errors.firstName = "Invalid characters in First Name.";
            }

            if (!/^[a-zA-Z]+$/.test(values.secondName)) {
                errors.secondName = "Invalid characters in Second Name.";
            }

            return errors;
        },
        onSubmit: (values) => {
            if (values.newPassword !== values.confirmNewPassword) {
                setPasswordMismatch(true);
            } else {
                setPasswordMismatch(false);
            }
        },
    });

    const togglePasswordVisibility = (field) => {
        if (field === "current-password") {
            setShowCurrentPassword(!showCurrentPassword);
        } else if (field === "new-password") {
            setShowNewPassword(!showNewPassword);
        } else if (field === "confirm-new-password") {
            setShowConfirmNewPassword(!showConfirmNewPassword);
        }
    };

    const firstNameError = submitClicked && formik.errors.firstName;
    const secondNameError = submitClicked && formik.errors.secondName;

    const handleSaveChanges = () => {
        setSubmitClicked(true);
        formik.handleSubmit();
    };

    return (
        <div className={styles.profileContainer}>
            <div className={styles.rightColumn}>
                <nav className={styles.sectionNav}>
                    <ul className={styles.breadcrumbsList}>
                        <li>
                            <Link to="/" className={styles.breadcrumbsLinkToHome}>
                                Home
                            </Link>
                        </li>
                        <img
                            className={styles.breadcrumbsArrow}
                            src={arrow}
                            alt="arrowLeft"
                            width="14"
                            height="14"
                        />
                        <li>
                            <Link to="/EditProfile" className={styles.breadcrumbsLinkToCart}>
                                Account
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Link to="/EditProfile" className={styles.manageAccountHeading}>
                    Manage My Account
                </Link>
                <Link to="/EditProfile" className={styles.accountLink}>
                    My Profile
                </Link>
                <Link to="/test" className={styles.accountLink}>
                    Address
                </Link>
                <Link to="/test" className={styles.accountLink}>
                    My Payment Options
                </Link>
                <Link to="/cart" className={styles.manageAccountHeading}>
                    My Orders
                </Link>
                <Link to="/test" className={styles.manageAccountHeading}>
                    My Wishlist
                </Link>
            </div>
            <div className={styles.leftColumn}>
                <h1 className={styles.profileHeading}>Edit Your Profile</h1>
                <div className={styles.columnContainer}>
                    <div className={styles.column}>
                        <div className={styles.formGroup}>
                            <h2 className={styles.profileChangesHeading}>First Name</h2>
                            <label htmlFor="firstName"></label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="John"
                                {...formik.getFieldProps("firstName")}
                            />
                            {firstNameError && (
                                <p className={styles.errorMessage}>{firstNameError}</p>
                            )}
                        </div>
                        <div className={styles.formGroup}>
                            <h2 className={styles.profileChangesHeading}>Email</h2>
                            <label htmlFor="email"></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="example@mail.com"
                                {...formik.getFieldProps("email")}
                            />
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.formGroup}>
                            <h2 className={styles.profileChangesHeading}>Second Name</h2>
                            <label htmlFor="secondName"></label>
                            <input
                                type="text"
                                id="secondName"
                                name="secondName"
                                placeholder="Smith"
                                {...formik.getFieldProps("secondName")}
                            />
                            {secondNameError && (
                                <p className={styles.errorMessage}>{secondNameError}</p>
                            )}
                        </div>
                        <div className={styles.formGroup}>
                            <h2 className={styles.profileChangesHeading}>Address</h2>
                            <label htmlFor="address"></label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                placeholder="Kingston, 5236, United States"
                                {...formik.getFieldProps("address")}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.column}>
                    <h2 className={styles.profileChangesHeading}>Profile Changes</h2>
                    <div className={styles.formGroup}>
                        <div className={styles.passwordInputGroup}>
                            <input
                                type={showCurrentPassword ? "text" : "password"}
                                id="currentPassword"
                                name="currentPassword"
                                placeholder="Current Password"
                                {...formik.getFieldProps("currentPassword")}
                            />
                            <span
                                id="current-password-toggle"
                                className={styles.passwordToggle}
                                onClick={() => togglePasswordVisibility("current-password")}
                            >
                                {showCurrentPassword ? "👁️" : "🔒"}
                            </span>
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <div className={styles.passwordInputGroup}>
                            <input
                                type={showNewPassword ? "text" : "password"}
                                id="newPassword"
                                name="newPassword"
                                placeholder="Create New Password"
                                {...formik.getFieldProps("newPassword")}
                            />
                            <span
                                id="new-password-toggle"
                                className={styles.passwordToggle}
                                onClick={() => togglePasswordVisibility("new-password")}
                            >
                                {showNewPassword ? "👁️" : "🔒"}
                            </span>
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <div className={styles.passwordInputGroup}>
                            <input
                                type={showConfirmNewPassword ? "text" : "password"}
                                id="confirmNewPassword"
                                name="confirmNewPassword"
                                placeholder="Confirm New Password"
                                {...formik.getFieldProps("confirmNewPassword")}
                            />
                            <span
                                id="confirm-new-password-toggle"
                                className={styles.passwordToggle}
                                onClick={() => togglePasswordVisibility("confirm-new-password")}
                            >
                                {showConfirmNewPassword ? "👁️" : "🔒"}
                            </span>
                        </div>
                        {formik.touched.confirmNewPassword &&
                            formik.errors.confirmNewPassword && (
                            <p className={styles.errorMessage}>
                                {formik.errors.confirmNewPassword}
                            </p>
                        )}
                        {passwordMismatch && (
                            <p className={styles.errorMessage}>Passwords do not match.</p>
                        )}
                    </div>
                </div>
                {submitClicked && (firstNameError || secondNameError) && (
                    <p className={styles.errorMessage}>
                        Please fix the errors before saving.
                    </p>
                )}
                <Button
                    text="Save Changes"
                    style={{
                        width: "40%",
                        padding: "16px 0",
                        margin: "0 auto",
                        backgroundColor: "var(--black--background)",
                    }}
                    onClick={handleSaveChanges}
                />
            </div>
        </div>
    );
}

export default EditProfile;
