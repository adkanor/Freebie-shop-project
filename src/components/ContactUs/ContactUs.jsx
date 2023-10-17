import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./ContactUs.module.css";
import Button from "../Button/Button";
import { toast } from "react-toastify";
const ContactUs = () => {
    const email = "katya162157@gmail.com";
    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        if (!values.message.trim()) {
            toast.error("Message cannot be empty", {
                position: "bottom-left",
                autoClose: 2500,
            });
        } else {
            try {
                toast.success("Message sent successfully!", {
                    position: "bottom-left",
                    autoClose: 2500,
                });
                console.log("Sending to server:", values.message);
                resetForm();
            } catch (error) {
                toast.error("Failed to send the message. Please try again.", {
                    position: "bottom-left",
                    autoClose: 2500,
                });
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
                    email: email,
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
                        <Field type="hidden" name="email" />
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
