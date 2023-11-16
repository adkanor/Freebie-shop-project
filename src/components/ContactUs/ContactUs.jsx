import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./ContactUs.module.css";
import Button from "../Button/Button";
import { toast } from "react-toastify";
import axios from "axios";
import { URL } from "../../variables";
const ContactUs = () => {
    const token = localStorage.getItem("token");

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        if (!values.message.trim()) {
            toast.error("Message cannot be empty");
        } else {
            const message = values.message;
            try {
                await axios.post(`${URL}supportUser`, message, {
                    headers: {
                        Authorization: `${token}`,
                    },
                });

                toast.success("Message sent successfully!");
                resetForm();
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
                    message: "",
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
