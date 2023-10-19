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
});

export default validateSchemaCheckout;