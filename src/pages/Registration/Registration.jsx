import React, {useEffect, useState} from "react";
import validationSchema from "./validationSchema";
import {Form, Formik} from "formik";
import Input from "../../components/InputPassworgLogin/Input";
import Button from "../../components/Button/Button";
import style from "./Registration.module.css";
import {Link} from "react-router-dom";
import {useGoogleOneTapLogin} from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios from "axios";


const Registration = () => {
    const [bannerReg, setBannerReg] = useState();


    useGoogleOneTapLogin({
        onSuccess: credentialResponse => {
            const decoded = jwt_decode(credentialResponse.credential);
            const value = {
                email: decoded.email,
                password: decoded.azp,
                name: decoded.given_name
            };
            apiServerRegistration(value);
        },
        onError: () => {
            console.log("Login Failed");
        },
    });

    useEffect(() => {
        axios.get("https://shopcoserver-git-main-chesterfalmen.vercel.app/api/loginBanner")
            .then(res => {
                setBannerReg(res.data.url);

            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    // /apis
    const apiServerRegistration = (values) => {
        console.log(values);
    };
 

    return (
        <div className={`section ${style.registrationWrapper}`}>
            <div className={style.registrationBanner}>
                <img src={bannerReg} alt="bannerLogin"/>
            </div>
            <div className={style.registrationFormWrapper}>
                <p className={style.registrationTitle}>Create an account</p>
                <p className={style.registrationSubTitle}>Enter your details below</p>
                <Formik initialValues={{
                    name: "",
                    email: "",
                    password: ""

                }} validationSchema={validationSchema} onSubmit={values => {
                    console.log(values);
                }}>
                    {({errors, touched}) => (
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
                            <Button
                                type={"submit"}
                                text={"Create Account"}
                                style={{
                                    width: "100%",
                                    maxWidth: "500px",
                                    padding: "16px 48px",
                                    fontSize: "20px",
                                    backgroundColor: "var(--login-btn)",
                                    color: "var(--white-text)",
                                    border: "none"
                                }}
                            />
                        </Form>
                    )}
                </Formik>
                <div className={style.redirectPanel}>
                    <p>Already have account?</p>
                    <Link className={style.redirectLogin} to="/login"> Log in</Link>
                </div>
            </div>
        </div>
    );
};

export default Registration;