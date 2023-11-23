import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./ContactUs.module.css";
import Button from "../Button/Button";
import { toast } from "react-toastify";
import axios from "axios";
import { URL } from "../../variables";
import { useLocation } from "react-router";
const ContactUs = () => {
    const token = localStorage.getItem("token");
    const location = useLocation();
    let orderText = "";
    if (location.state?.fromComponent === "orders" && location.state?.orderId) {
        orderText = `Hello, I want to write about order ${location.state.orderId}.`;
    } else {
        orderText = "";
        console.log(orderText);
    }

    const handleSubmit = async (values, { setSubmitting, setFieldValue }) => {
        if (!values.message.trim()) {
            toast.error("Message cannot be empty");
        } else {
            const message = values.message;
            try {
                setFieldValue("message", "");
                await axios.post(`${URL}supportUser`, message, {
                    headers: {
                        Authorization: `${token}`,
                    },
                });
                toast.success("Message sent successfully!");
            } catch (error) {
                toast.error(
                    "Failed to send the message. Please try again later."
                );
            } finally {
                setSubmitting(false);
            }
        }
    };

    return (
        <div className={styles.contactUsContainer}>
            <Formik
                initialValues={{
                    message: orderText,
                }}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className={styles.contactForm}>
                        <Field
                            name="message"
                            as="textarea"
                            placeholder="Contact us and wait for responce via mail..."
                            className={styles.messageTextarea}
                            maxLength={500}
                        />

                        <ErrorMessage
                            name="message"
                            component="div"
                            className={styles.errorText}
                        />

                        <Button
                            text={isSubmitting ? "Sending..." : "Send"}
                            disabled={isSubmitting}
                            type="submit"
                            style={{
                                position: "absolute",
                                bottom: "10px",
                                left: "40px",
                                width: "120px",
                                padding: "10px 0",
                                margin: "0 auto",
                                backgroundColor: "var(--black--background)",
                            }}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ContactUs;
