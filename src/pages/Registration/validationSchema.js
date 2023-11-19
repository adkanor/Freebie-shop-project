import * as Yup from "yup";

// const nameRegExp = /^[a-zA-Zа-яА-ЯІіЇїЄєҐґ]+(([',. -][a-zA-Zа-яА-ЯІіЇїЄєҐґ ])?[a-zA-Zа-яА-ЯІіЇїЄєҐґ]*)*$/;
const nameRegExp = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

const passwordRegExp =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@#$%^&(){}[\]:;<>,.?/~_+\-|=])\S{8,55}$/;

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Must be a valid email")
        .max(55, "Max length 65 symbol!")
        .min(5, "Min length 5 symbol")
        .required("Email is required"),
    password: Yup.string()
        .matches(passwordRegExp, "Minimum length of 8. At least one uppercase and one lowercase letter, and one special character")
        .max(55, "Max length 65 symbol!")
        .min(8, "Min length 8 symbol")
        .required("Password is required"),
    name: Yup.string()
        .matches(nameRegExp, "Name is not valid")
        .min(2, "Min length 2 symbol")
        .max(50, "Max length 50 symbol!")
        .required("Required"),
    confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
    ),
});

export default validationSchema;
