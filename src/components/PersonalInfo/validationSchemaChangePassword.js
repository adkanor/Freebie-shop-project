import * as Yup from "yup";

const passwordRegExp =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@#$%^&(){}[\]:;<>,.?/~_+\-|=])\S{8,55}$/;

const validationSchemaChangePassword = Yup.object().shape({
    currentPassword: Yup.string()
        .max(55, "Max length 65 symbol!")
        .min(8, "Min length 8 symbol")
        .required("Password is required"),
    newPassword: Yup.string()
        .required("New Password is required")
        .matches(passwordRegExp, "Min length 8, one special character")
        .max(55, "Max length 65 symbol!")
        .min(8, "Min length 8 symbol")
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
