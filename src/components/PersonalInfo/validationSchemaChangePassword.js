import * as Yup from "yup";
const validationSchemaChangePassword = Yup.object().shape({
    currentPassword: Yup.string()
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
        )
        .test(
            "not-same-as-old",
            "New Password must be different from Old Password",
            function (value) {
                const currentPassword = this.parent.currentPassword;
                return value !== currentPassword;
            }
        ),
    confirmNewPassword: Yup.string()
        .required("Confirm New Password is required")
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
});

export default validationSchemaChangePassword;
