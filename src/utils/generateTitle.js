/* eslint-disable */

export const getStyleValue = (obj) => {
    const keysToCheck = ["style", "sex", "category", "search", "hasDiscount"];

    for (const key of keysToCheck) {
        if (obj[key] !== undefined) {
            console.log(obj[key]);
            return obj[key];
        }
    }

    return "Product List";
};
