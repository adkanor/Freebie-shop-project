/* eslint-disable */

export const getStyleValue = (obj) => {
    const keysToCheck = ["style", "sex", "category", "search", "hasdiscount"];
    if (obj.hasdiscount) {
        console.log(obj.hasdiscount);
        return "On Sale";
    }

    for (const key of keysToCheck) {
        if (key !== "hasdiscount" && obj[key] !== undefined) {
            return obj[key];
        }
    }

    return "Product List";
};
