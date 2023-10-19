import * as Yup from "yup";
const validateSchemaCheckout = Yup.object().shape({
    companyName: Yup.string().max(40).required("This field is required"),
    streetAddress: Yup.string().max(40).required("This field is required"),
    apartmentInfo: Yup.string().max(40),
    city: Yup.string().max(40).required("This field is required"),
    phoneNumber: Yup.string().required("This field is required"),
});

export default validateSchemaCheckout;