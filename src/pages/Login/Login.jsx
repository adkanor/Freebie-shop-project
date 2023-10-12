import React, {useEffect, useState} from "react";
import style from "./Login.module.css";

import {Form, Formik} from "formik";
import Input from "../../components/InputPassworgLogin/Input";
import validationSchema from "./validationSchema";
import Button from "../../components/Button/Button";
import {Link} from "react-router-dom";
import {useGoogleOneTapLogin} from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios from "axios";


const Login = () => {
    const [bannerLog, setBannerLog] = useState();

    useEffect(() => {
        axios
            .get("https://shopcoserver-git-main-chesterfalmen.vercel.app/api/loginBanner")
            .then(res => {
                setBannerLog(res.data.url);
            })
            .catch(error => {
                console.error(error);
            });


    }, []);

    useGoogleOneTapLogin({
        onSuccess: credentialResponse => {
            const decoded = jwt_decode(credentialResponse.credential);
            // console.log(decoded);
            const value = {
                email: decoded.email,
                password: decoded.azp,
            };
            apiServerLogin(value);

        },
        onError: () => {
            console.log("Login Failed");
        },
    });

    ///apis
    const apiServerLogin = (values) => {
        console.log(values);
    };


    return (
        <div className={`section ${style.loginContainer}`}>
            <div className={style.bannerContainer}>
                <img className={style.bannerLogin} src={bannerLog} alt={"bannerLogin"}/>
            </div>
            <div className={style.loginWrapper}>
                <div className={style.loginTitle}>Log in to Exclusive</div>
                <p className={style.loginSubtitle}>Enter your details below</p>
                <div className={style.formBlock}>
                    <Formik
                        initialValues={{
                            email: "",
                            password: ""
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            apiServerLogin(values);

                        }}
                    >
                        {({errors, touched}) => (
                            <Form className={style.formWrapper}>
                                <Input
                                    name="email"
                                    placeholder="Email or Phone Number"
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
                                <div className={style.loginBtn}>
                                    <Button type={"submit"} text={"Log In"} style={{
                                        padding: "16px 35px",
                                        fontSize: "16px",
                                        backgroundColor: "var(--login-btn)",
                                        color: "var(--white-text)",
                                        border: "none",
                                    }}/>
                                    <Link className={style.ForgetPassword} to="/registration"> Forget Password?</Link>
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




