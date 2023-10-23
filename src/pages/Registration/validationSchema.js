import * as Yup from "yup";

//const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
//const nameRegExp =/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Must be a valid email")
        .max(55, "Max length 55 symbol!")
        .min(5, "Min length 5 symbol")
        .required("Email is required"),
    password: Yup.string()
        .max(55, "Max length 55 symbol!")
        .min(5, "Min length 5 symbol")
        .required("Password is required"),
    name: Yup.string()
        .min(2, "Min length 2 symbol")
        .max(50, "Max length 50 symbol!")
        .required("Required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
});

export default validationSchema;
