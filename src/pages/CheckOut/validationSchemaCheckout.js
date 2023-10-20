import * as Yup from "yup";
const validateSchemaCheckout = Yup.object().shape({
    userName: Yup.string().max(40).required("This field is required"),
    companyName: Yup.string().max(40).required("This field is required"),
    streetAddress: Yup.string().max(40).required("This field is required"),
    apartmentInfo: Yup.string().max(40),
    city: Yup.string().max(40).required("This field is required"),
    phoneNumber: Yup.string().required("This field is required"),
    email: Yup.string()
        .email("Please enter a valid email")
        .required("This field is required"),
    oldPassword: Yup.string()
        .required("Old Password is required")
        .min(6, "Old Password must be at least 6 characters")
        .matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/,
            "Old Password must contain at least one uppercase letter, one lowercase letter, and one number"
        ),
    newPassword: Yup.string()
        .required("New Password is required")
        .min(6, "New Password must be at least 6 characters")
        .matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/,
            "New Password must contain at least one uppercase letter, one lowercase letter, and one number"
        ),
    confirmNewPassword: Yup.string()
        .required("Confirm New Password is required")
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
});

export default validateSchemaCheckout;
