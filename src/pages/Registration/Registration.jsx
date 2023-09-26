import React from "react";
import validationSchema from "../../components/ValidationSchema/validationSchema";
import {Form, Formik} from "formik";
import Input from "../../components/InputPassworgLogin/Input";
import Button from "../../components/Button/Button";
import style from "./Registration.module.css";

const url ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz6RwvgggYzVqj1g1WegTjmGl5vzxPaCm6Lg&usqp=CAU";


const Registration = () => {

    return (
        <div className={style.registrationWrapper}>
            <div className={style.registrationBanner}>
                <img src={url} alt="photo" />
            </div>

            <div className={style.registrationFormWrapper}>
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
                                backgroundColor: "var(--login-btn)",
                                color: "var(--white-text)",
                                border: "none",
                            }}/>
                        </Form>

                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Registration;