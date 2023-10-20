/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import ProfileForm from "../ProfileForm/ProfileForm";
import validationSchemaCheckout from "../../pages/CheckOut/validationSchemaCheckout";
import validationSchemaChangePassword from "./validationSchemaChangePassword";

import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../stores/personalInfo/action";
import Preloader from "../Preloader/Preloader";
import InputCheckout from "../InputCheckout/InputCheckout";
import styles from "../../pages/CheckOut/CheckOut.module.css";
import stylesInfo from "./PersonalInfo.module.css";
import BlackButton from "../Button/Button";
const PersonalInfo = () => {
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.personalInfoReducer.userData);
    const [isLoading, setIsLoading] = useState(true);
    const errorMessage = useSelector(
        (state) => state.personalInfoReducer.error
    );
    console.log(errorMessage);
    useEffect(() => {
        if (token) {
            dispatch(fetchUserData(token))
                .then(() => setIsLoading(false))
                .catch(() => setIsLoading(false));
        }
    }, [dispatch, token]);

    if (isLoading) {
        return <Preloader />;
    } else if (errorMessage) {
        return (
            <div className={stylesInfo.errorMessage}>
                Error: {errorMessage}. Please try later
            </div>
        );
    }
    return (
        <div className={stylesInfo.formContainer}>
            <div className={stylesInfo.formUserData}>
                <h2 className={stylesInfo.header}>Personal Information</h2>
                <Formik
                    initialValues={{
                        userName: userData ? userData.userName : "",
                        companyName: userData ? userData.companyName : "",
                        streetAddress: userData ? userData.streetAddress : "",
                        apartmentInfo: userData ? userData.apartmentInfo : "",
                        city: userData ? userData.city : "",
                        phoneNumber: userData ? userData.phoneNumber : "",
                        email: userData ? userData.email : "",
                    }}
                    validationSchema={validationSchemaCheckout}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ errors, touched }) => (
                        <>
                            <ProfileForm
                                errors={errors}
                                touched={touched}
                            ></ProfileForm>
                        </>
                    )}
                </Formik>
                <BlackButton
                    text="Apply Changes"
                    type="button"
                    style={{
                        width: "100%",
                        padding: "16px 0",
                        margin: "0 auto",
                        backgroundColor: "var(--black--background)",
                        marginBottom: "50px",
                    }}
                />
            </div>
            <div className={stylesInfo.formChangePassword}>
                <h2 className={stylesInfo.header}>Change Password</h2>
                <Formik
                    initialValues={{
                        currentPassword: "",
                        newPassword: "",
                        confirmNewPassword: "",
                    }}
                    validationSchema={validationSchemaChangePassword}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className={styles.form}>
                            <div className={styles.formSection}>
                                <InputCheckout
                                    name="oldPassword"
                                    text="Old Password"
                                    isError={
                                        errors.oldPassword &&
                                        touched.oldPassword
                                    }
                                    errorText={errors.oldPassword}
                                />
                                <InputCheckout
                                    name="newPassword"
                                    text="New Password"
                                    isError={
                                        errors.newPassword &&
                                        touched.newPassword
                                    }
                                    errorText={errors.newPassword}
                                />
                                <InputCheckout
                                    name="confirmNewPassword"
                                    text="Сonfirm new Password"
                                    isError={
                                        errors.confirmNewPassword &&
                                        touched.confirmNewPassword
                                    }
                                    errorText={errors.confirmNewPassword}
                                />
                            </div>
                        </Form>
                    )}
                </Formik>
                <BlackButton
                    text="Apply Changes"
                    type="button"
                    style={{
                        width: "100%",
                        padding: "16px 0",
                        margin: "0 auto",
                        backgroundColor: "var(--black--background)",
                        marginBottom: "50px",
                    }}
                />
            </div>
        </div>
    );
};

export default PersonalInfo;
