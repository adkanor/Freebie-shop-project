import React, { useEffect, useState } from "react";
import validationSchema from "./validationSchema";
import { Form, Formik } from "formik";
import Input from "../../components/InputPassworgLogin/Input";
import Button from "../../components/Button/Button";
import style from "./Registration.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { URL } from "../../variables";

const Registration = () => {
    const [bannerReg, setBannerReg] = useState();
    const [errorMessageServer, setErrorMessageServer] = useState();
    const [isErrorMessageServer, setIsErrorMessageServer] = useState(false);
    const navigate = useNavigate();

    const redirect = () => navigate("/account");

    useGoogleOneTapLogin({
        cancel_on_tap_outside: false,
        onSuccess: (credentialResponse) => {
            const decoded = jwt_decode(credentialResponse.credential);
            const value = {
                email: decoded.email,
                password: decoded.azp,
                name: decoded.given_name,
            };
            apiServerRegistration(value);
        },
        onError: () => {
            console.error("Login Failed");
        },
    });

    useEffect(() => {
        axios
            .get(`${URL}loginBanner`)
            .then((res) => {
                setBannerReg(res.data.url);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const apiServerRegistration = (values) => {
        const candidate = {
            email: values.email,
            userName: values.name,
            password: values.password,
            confirmPassword: values.confirmPassword,
        };

        axios
            .post(`${URL}registration`, candidate)
            .then((response) => {
                if (response.data.status === 200) {
                    localStorage.setItem("token", response.data.token);
                    redirect();
                }
                if (response.data.status === 400) {
                    setErrorMessageServer(response.data.info);
                    setIsErrorMessageServer(true);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className={`section ${style.registrationWrapper}`}>
            <div className={style.registrationBanner}>
                <img src={bannerReg} alt="bannerLogin" />
            </div>
            <div className={style.registrationFormWrapper}>
                <p className={style.registrationTitle}>Create an account</p>
                <p className={style.registrationSubTitle}>
                    Enter your details below
                </p>
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        apiServerRegistration(values);
                        setIsErrorMessageServer(false);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <Input
                                name="name"
                                placeholder="Name"
                                isError={errors.name && touched.name}
                                errorText={errors.name}
                                type={"text"}
                            />
                            <Input
                                name="email"
                                placeholder="Email"
                                isError={errors.email && touched.email}
                                errorText={errors.email}
                                type={"email"}
                            />
                            <Input
                                name="password"
                                placeholder="Password"
                                isError={errors.password && touched.password}
                                errorText={errors.password}
                                type={"password"}
                            />
                            <Input
                                name="confirmPassword"
                                placeholder="Confirm password"
                                isError={
                                    errors.confirmPassword &&
                                    touched.confirmPassword
                                }
                                errorText={errors.confirmPassword}
                                type={"password"}
                                errorMessageOther={errorMessageServer}
                                isErrorMessageServer={isErrorMessageServer}
                            />
                            <Button
                                type={"submit"}
                                text={"Create Account"}
                                style={{
                                    width: "100%",
                                    maxWidth: "500px",
                                    padding: "16px 48px",
                                    fontSize: "20px",
                                    marginTop: "16px",
                                    backgroundColor: "var(--lightblue-color)",
                                    color: "var(--black-text)",
                                    border: "none",
                                    fontFamily: "Satoshi",
                                    fontWeight: 600,
                                }}
                            />
                        </Form>
                    )}
                </Formik>
                <div className={style.redirectPanel}>
                    <p className={style.redirectLogin}>Already have account?</p>
                    <Link className={style.redirectLogin} to="/login">
                        Log in
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Registration;
