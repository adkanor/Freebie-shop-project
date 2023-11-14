import React, { useState } from "react";
import style from "./ForgotPassword.module.css";
import { Form, Formik } from "formik";
import validationSchema from "./validationSchema";
import Input from "../../components/InputPassworgLogin/Input";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { URL } from "../../variables";
const ForgotPassword = () => {
    const [isServerMassage, setIsServerMassage] = useState(false);
    const [isServerErrorMassage, setIsServerErrorMassage] = useState(false);
    const [serverMassage, setServerMassage] = useState();

    const showMassage = () => {
        setIsServerMassage(true);
    };

    const resetErrors = () => {
        setIsServerMassage(false);
        setIsServerErrorMassage(false);
    };

    const forgotPasswordApi = (values) => {
        const email = { email: values.email };
        axios
            .post(`${URL}resetPassword`, email)
            .then((res) => {
                if (res.data.status === 200) {
                    showMassage();
                } else {
                    setIsServerErrorMassage(true);
                    setServerMassage(res.data.message);
                }
            })
            .catch((error) => {
                console.error("error", error);
            });
    };
    return (
        <div className={`section ${style.forgotPasswordBlock}`}>
            <Formik
                initialValues={{
                    email: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    resetErrors();
                    forgotPasswordApi(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form className={style.emailField}>
                        <h2 className={style.forgotPasswordTitle}>
                            Password recovery
                        </h2>
                        <Input
                            name="email"
                            placeholder="Email"
                            isError={errors.email && touched.email}
                            errorText={errors.email}
                            type={"email"}
                            errorMessageOther={serverMassage}
                            isErrorMessageServer={isServerErrorMassage}
                        />

                        <div className={style.btnBlock}>
                            <Button
                                type={"submit"}
                                text={"Restore"}
                                style={{
                                    padding: "16px 35px",
                                    fontSize: "16px",
                                    backgroundColor: "var(--login-btn)",
                                    color: "var(--white-text)",
                                    border: "none",
                                }}
                            />
                            <Link className={style.goHome} to="/">
                                {" "}
                                Go Home
                            </Link>
                        </div>
                        {isServerMassage && (
                            <p className={style.forgotMassage}>
                                Password recovery instructions have been sent to
                                your email
                            </p>
                        )}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ForgotPassword;
