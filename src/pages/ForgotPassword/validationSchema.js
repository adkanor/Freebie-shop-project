import * as Yup from "yup";


const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Must be a valid email")
        .max(255, "Max length 255 symbol!")
        .min(5, "Min length 5 symbol")
        .required("Email is required"),
});

export default validationSchema;