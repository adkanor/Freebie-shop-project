import React, { useEffect, useState } from "react";
import style from "./Login.module.css";
import { Form, Formik } from "formik";
import Input from "../../components/InputPassworgLogin/Input";
import validationSchema from "./validationSchema";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { URL } from "../../variables";
import { useDispatch } from "react-redux";
import { fetchCartItems } from "../../stores/cartProducts/action";

const Login = () => {
    const [bannerLog, setBannerLog] = useState();
    const [errorMessageServer, setErrorMessageServer] = useState();
    const [isErrorMessageServer, setIsErrorMessageServer] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const memoryUser = async (data) => {
        localStorage.setItem("token", data.token);
        dispatch(fetchCartItems());
    };

    useEffect(() => {
        axios
            .get(`${URL}loginBanner`)
            .then((res) => {
                setBannerLog(res.data.url);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useGoogleOneTapLogin({
        cancel_on_tap_outside: false,
        onSuccess: (credentialResponse) => {
            const decoded = jwt_decode(credentialResponse.credential);
            const value = {
                email: decoded.email,
                password: decoded.azp,
                name: decoded.given_name,
            };
            apiContinueWidthGoogle(value);
        },
        onError: () => {
            setErrorMessageServer("Login failed");
        },
        scope: "email profile",
        uxMode: "redirect",
    });

    const redirectAccount = () => navigate("/account");

    const apiServerLogin = (values) => {
        const user = {
            email: values.email,
            password: values.password,
        };

        axios
            .post(`${URL}login`, user)
            .then((response) => {
                if (response.data.status === 200) {
                    memoryUser(response.data.info);
                    redirectAccount();
                }
                if (response.data.status === 400) {
                    setErrorMessageServer(response.data.error);
                    setIsErrorMessageServer(true);
                }
            })
            .catch((error) => {
                console.error("error", error);
                setErrorMessageServer("Sorry! Try later");
                setIsErrorMessageServer(true);
            });
    };

    const apiContinueWidthGoogle = (values) => {
        const candidate = {
            email: values.email,
            userName: values.name,
            password: values.password,
        };
        axios
            .post(`${URL}continuewidthgoogle`, candidate)
            .then((response) => {
                if (response.data.status === 200) {
                    localStorage.setItem("token", response.data.token);
                    redirectAccount();
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
        <div className={`section ${style.loginContainer}`}>
            <div className={style.bannerContainer}>
                <img
                    className={style.bannerLogin}
                    src={bannerLog}
                    alt="bannerLogin"
                />
            </div>
            <div className={style.loginWrapper}>
                <div className={style.loginTitle}>Log in to Exclusive</div>
                <p className={style.loginSubtitle}>Enter your details below</p>
                <div className={style.formBlock}>
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            setIsErrorMessageServer(false);
                            apiServerLogin(values);
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form className={style.formWrapper}>
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
                                    isError={
                                        errors.password && touched.password
                                    }
                                    errorText={errors.password}
                                    type={"password"}
                                    errorMessageOther={errorMessageServer}
                                    isErrorMessageServer={isErrorMessageServer}
                                />
                                <div className={style.loginBtn}>
                                    <Button
                                        type={"submit"}
                                        text={"Log In"}
                                        style={{
                                            padding: "16px 35px",
                                            fontSize: "16px",
                                            backgroundColor:
                                                "var(--lightblue-color)",
                                            color: "var(--black-text)",
                                            border: "none",
                                            fontFamily: "Satoshi",
                                            fontWeight: 600,
                                        }}
                                    />
                                    <Link
                                        className={style.createAccount}
                                        to="/registration"
                                    >
                                        Create account?
                                    </Link>
                                </div>

                                <div className={style.forgotPassword}>
                                    <Link
                                        className={style.forgotPasswordText}
                                        to="/forgotPassword"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Login;
