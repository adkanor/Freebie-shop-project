/* eslint-disable */
import React, {useEffect, useState} from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import ProfileForm from "../ProfileForm/ProfileForm";
import validationSchemaCheckout from "../../pages/CheckOut/validationSchemaCheckout";
import validationSchemaChangePassword from "./validationSchemaChangePassword";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserData} from "../../stores/personalInfo/action";
import Preloader from "../Preloader/Preloader";
import InputCheckout from "../InputCheckout/InputCheckout";
import styles from "../../pages/CheckOut/CheckOut.module.css";
import stylesInfo from "./PersonalInfo.module.css";
import BlackButton from "../Button/Button";
import {toast} from "react-toastify";
import axios from "axios";

const PersonalInfo = () => {
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.personalInfoReducer.userData);
    const [isLoading, setIsLoading] = useState(true);
    const errorMessage = useSelector(
        (state) => state.personalInfoReducer.error
    );

    useEffect(() => {
        if (token) {
            dispatch(fetchUserData(token))
                .then(() => setIsLoading(false))
                .catch(() => setIsLoading(false));
        }
    }, [dispatch, token]);

    if (isLoading) {
        return <Preloader/>;
    } else if (errorMessage) {
        return (
            <div className={stylesInfo.errorMessage}>
                Error: {errorMessage}. Please try later
            </div>
        );
    }
    const editProfileInfo = async (values, {setSubmitting, resetForm}) => {
        try {
            const response = await axios.put(
                "https://shopcoserver-git-main-chesterfalmen.vercel.app/api/changeUser",
                values,
                {
                    headers: {
                        Authorization: `${token}`,
                    },
                }
            );
            toast.success("Form data successfully changed");
        } catch (error) {
            toast.error("Failed to send changes. Please try again later.");
        } finally {
            setSubmitting(false);
        }
    };

    const changePassword = async (values, {setSubmitting, resetForm}) => {
        try {
            const response = await axios.put(
                "https://shopcoserver-git-main-chesterfalmen.vercel.app/api/changeUserPass",
                {
                    password: values.currentPassword,
                    newPassword: values.newPassword,
                },
                {
                    headers: {
                        Authorization: `${token}`,
                    },
                }
            );

            if (response.data.status === 200) {
                toast.success("Password  successfully changed");
            } else if (response.data.status === 400) {
                console.error(response.data.error);
                toast.error("Your old password might be incorrect. Try again ");
            }
        } catch (error) {
            toast.error("Failed to send changes. Please try again later.");
        } finally {
            setSubmitting(false);
        }
    };

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
                    onSubmit={editProfileInfo}
                >
                    {({errors, touched, isSubmitting}) => (
                        <>
                            <ProfileForm errors={errors} touched={touched}>
                                <BlackButton
                                    text={
                                        isSubmitting
                                            ? "Applying..."
                                            : "Apply Changes"
                                    }
                                    disabled={isSubmitting}
                                    type="submit"
                                    style={{
                                        width: "100%",
                                        padding: "16px 0",
                                        margin: "0 auto",
                                        backgroundColor:
                                            "var(--black--background)",
                                        marginBottom: "50px",
                                    }}
                                />
                            </ProfileForm>
                        </>
                    )}
                </Formik>
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
                    onSubmit={changePassword}
                >
                    {({errors, touched, isSubmitting}) => (
                        <Form className={styles.form}>
                            <div className={styles.formSection}>
                                <InputCheckout
                                    name="currentPassword"
                                    text="Old Password"
                                    isError={
                                        errors.oldPassword &&
                                        touched.oldPassword
                                    }
                                    errorText={errors.currentPassword}
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
                                <BlackButton
                                    text={
                                        isSubmitting
                                            ? "Applying..."
                                            : "Apply Changes"
                                    }
                                    disabled={isSubmitting}
                                    type="submit"
                                    style={{
                                        width: "100%",
                                        padding: "16px 0",
                                        margin: "0 auto",
                                        backgroundColor:
                                            "var(--black--background)",
                                        marginBottom: "50px",
                                    }}
                                />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default PersonalInfo;
