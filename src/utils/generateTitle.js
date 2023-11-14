/* eslint-disable */

export const getStyleValue = (obj) => {
    const keysToCheck = ["style", "sex", "category", "search", "hasDiscount"];

    for (const key of keysToCheck) {
        if (obj[key] !== undefined) {
            return obj[key];
        }
    }

    return "Product List";
};
