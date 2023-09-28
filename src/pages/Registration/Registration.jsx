import React from "react";
import validationSchema from "./validationSchema";
import {Form, Formik} from "formik";
import Input from "../../components/InputPassworgLogin/Input";
import Button from "../../components/Button/Button";
import style from "./Registration.module.css";
import googleIcon from "../../assets/icons/Registration/google.svg";
import {Link} from "react-router-dom";

const url ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz6RwvgggYzVqj1g1WegTjmGl5vzxPaCm6Lg&usqp=CAU";


const Registration = () => {

    return (
        <div className={style.registrationWrapper}>
            <div className={style.registrationBanner}>
                <img src={url} alt="bannerLogin" />
            </div>
            <div className={style.registrationFormWrapper}>
                <p className={style.registrationTitle}>Create an account</p>
                <p className={style.registrationSubTitle}>Enter your details below</p>
                <Formik initialValues={{
                    name:"",
                    email: "",
                    password: ""

                }}validationSchema={validationSchema}
                onSubmit={values => {
                    console.log(values);
                }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <Input name="name"
                                placeholder="Name"
                                isError={errors.name && touched.name }
                                errorText={errors.name}
                                type={"text"}
                            />
                            <Input name="email"
                                placeholder="Email or Phone Number"
                                isError={errors.email && touched.email }
                                errorText={errors.email}
                                type={"email"}
                            />
                            <Input name="password"
                                placeholder="Password"
                                isError={errors.password && touched.password }
                                errorText={errors.password}
                                type={"password"}
                            />
                            <Button type={"submit"} text={"Create Account"} style={{
                                width:"100%",
                                maxWidth: "500px",
                                padding: "16px 48px",
                                fontSize:"20px",
                                backgroundColor: "var(--login-btn)",
                                color: "var(--white-text)",
                                border: "none",
                            }}/>
                        </Form>

                    )}
                </Formik>
                <div>

                    <Button
                        // text="Sign up with Google"
                        style={{
                            marginTop: "20px",
                            width: "100%",
                            height: "50px",
                            maxWidth: "500px",
                            background: "transparent",
                            color: "var(--gray-text-primary)",
                            textAlign: "center"
                        }}
                    >
                        <div className={style.googleRegistration} >
                            <img
                                className={style.googleIconRegistration}
                                src={googleIcon} alt="googleIcon"
                                width="24" height="24" />
                            <span>Sign up with Google</span>
                        </div>
                    </Button>
                    <div className={style.redirectPanel}>
                        <p>Already have account?</p>
                        <Link className={style.redirectLogin}  to="/login" > Log in</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;