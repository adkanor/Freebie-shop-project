import React from "react";
import styles from "../../pages/CheckOut/CheckOut.module.css";
import { Form } from "formik";
import PropTypes from "prop-types";

const ProfileForm = ({ children }) => {
    return <Form className={styles.form}>{children}</Form>;
};

ProfileForm.propTypes = {
    children: PropTypes.node,
};

export default ProfileForm;
