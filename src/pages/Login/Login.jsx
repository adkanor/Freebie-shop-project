import React from "react";
import style from "./Login.module.css";
import { Form, Formik } from "formik";
import Input from "../../components/InputPassworgLogin/Input";
import validationSchema from "./validationSchema";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";


const url ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz6RwvgggYzVqj1g1WegTjmGl5vzxPaCm6Lg&usqp=CAU";


const Login = () => {
    return (
        <div className={`section ${style.loginContainer}`}>
            <div className={style.bannerContainer}>
                <img className={style.bannerLogin} src={url} alt={"bannerLogin"}/>
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
                        onSubmit= {(values) => {
                            console.log("++++");
                            console.log(values, "FormValue");
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form className={style.formWrapper}>
                                <Input
                                    name="email"
                                    placeholder="Email or Phone Number"
                                    isError={errors.email && touched.email }
                                    errorText={errors.email}
                                    type={"email"}
                                />
                                <Input
                                    name="password"
                                    placeholder="Password"
                                    isError={errors.password && touched.password }
                                    errorText={errors.password}
                                    type={"password"}
                                />
                                <div className={style.loginBtn}>
                                    <Button type={"submit"} text={"Log In"} style={{
                                        padding: "16px 35px",
                                        fontSize:"16px",
                                        backgroundColor: "var(--login-btn)",
                                        color: "var(--white-text)",
                                        border: "none",
                                    }}/>
                                    <Link className={style.ForgetPassword} to="/registration" > Forget Password?</Link>
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