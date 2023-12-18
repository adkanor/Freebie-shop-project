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
    const [serverMassage] = useState();

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
                    // showMassage();
                    // setIsServerErrorMassage(false);
                    // // setServerMassage(res.data.message);
                    // setServerMassage("fgdfggfd");
                    // showMassage();
                    setIsServerMassage(true);
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
                            className={style.InputEmailPassRecovery}
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
                                    margin: "8px 0",
                                    fontSize: "16px",
                                    backgroundColor: "var(--lightblue-color)",
                                    color: "var(--black-text)",
                                    border: "none",
                                    fontFamily: "Satoshi",
                                    fontWeight: 600,
                                }}
                            />
                            <Link className={style.goHome} to="/">
                                Home
                            </Link>
                        </div>
                        {isServerMassage && (
                            <p className={style.forgotMassage}>
                                If the email is registered, instructions for changing the password will be sent to it.
                            </p>
                        )}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ForgotPassword;
