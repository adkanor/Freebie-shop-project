import React from "react";
import style from "./Login.module.css";
import { Form, Formik } from "formik";
import Input from "../../components/InputPassworgLogin/Input";
import validationSchema from "../../components/ValidationSchema/validationSchema";
import ButtonForm from "../../components/ButtonForm/ButtonForm";

const Login = () => {
    return (
        <div className={`section ${style.loginWrapper}`}>
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
                            <ButtonForm type={"submit"} text={"Log In"}/>
                        </Form>
                    )}
                </Formik>
            </div>

        </div>
    );
};

export default Login;