import * as Yup from "yup";
const validateSchemaCheckout = Yup.object().shape({
    userName: Yup.string()
        .min(3, "Must be at least 3 characters")
        .max(40, "Must be less than 40 characters")
        .matches(/^[a-zA-Z]+$/, "Username must contain only letters")
        .required("Username is required"),
    companyName: Yup.string()
        .min(3, "Must be at least 3 characters")
        .max(50, "Must be less than 50 characters"),
    streetAddress: Yup.string().max(40).required("This field is required"),
    apartmentInfo: Yup.string().max(40),
    city: Yup.string()
        .min(4, "Must be at least 4 characters")
        .max(40)
        .required("This field is required"),
    phoneNumber: Yup.string().required("This field is required"),
    email: Yup.string()
        .min(7, "Must be at least 7 characters")
        .max(40, "Must be less  than 40 characters")
        .required("Email is required"),
});

export default validateSchemaCheckout;
