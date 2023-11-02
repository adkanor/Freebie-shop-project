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
import { URL } from "../../urlVariable";
import { useDispatch } from "react-redux";
import { refreshCart } from "../../stores/cartProducts/action";
const Login = () => {
    const [bannerLog, setBannerLog] = useState();
    const [errorMessageServer, setErrorMessageServer] = useState();
    const [isErrorMessageServer, setIsErrorMessageServer] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const memoryUser = async (data) => {
        localStorage.setItem("token", data.token);
        const basket = localStorage.getItem("cartItems");
        if (basket) {
            console.log("Enter l;ocal");
            const response = await axios.post(
                `${URL}mergeBasket`,
                { basket: JSON.parse(basket) },
                {
                    headers: {
                        Authorization: data.token,
                    },
                }
            );
            if (response.data.status === 200) {
                localStorage.removeItem("cartItems");
                dispatch(refreshCart(response.data.basket));
            }
        }
    };

    useEffect(() => {
        axios
            .get(
                "https://shopcoserver-git-main-chesterfalmen.vercel.app/api/loginBanner"
            )
            .then((res) => {
                setBannerLog(res.data.url);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useGoogleOneTapLogin({
        onSuccess: (credentialResponse) => {
            const decoded = jwt_decode(credentialResponse.credential);
            const value = {
                email: decoded.email,
                password: decoded.azp,
            };
            apiServerLogin(value);
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
            .post(
                "https://shopcoserver-git-main-chesterfalmen.vercel.app/api/login",
                user
            )
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

    return (
        <div className={`section ${style.loginContainer}`}>
            <div className={style.bannerContainer}>
                <img
                    className={style.bannerLogin}
                    src={bannerLog}
                    alt={"bannerLogin"}
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
                                            backgroundColor: "var(--login-btn)",
                                            color: "var(--white-text)",
                                            border: "none",
                                        }}
                                    />
                                    <Link
                                        className={style.createAccount}
                                        to="/registration"
                                    >
                                        {" "}
                                        Create account?
                                    </Link>
                                </div>
                                <div className={style.forgotPassword}>
                                    <Link
                                        className={style.forgotPasswordText}
                                        to="/forgotPassword"
                                    >
                                        {" "}
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
