/* eslint-disable */
import { defaultParams } from "../variables";

export const getStyleValue = (obj) => {
    const keysToCheck = ["style", "sex", "category", "search", "hasdiscount"];
    if (obj.hasdiscount) {
        return "On Sale";
    }

    for (const key of keysToCheck) {
        if (key !== "hasdiscount" && obj[key] !== undefined) {
            return obj[key];
        }
    }

    return "Product List";
};
export const getCategoryLinks = (title) => {
    switch (title) {
        case "On Sale":
            return {
                home: "/",
                Sale: `${defaultParams}&hasdiscount=true`,
            };
        case "male":
            return {
                home: "/",
                Male: `${defaultParams}&sex=male`,
            };
        case "female":
            return {
                home: "/",
                female: `${defaultParams}&sex=female`,
            };
        case "casual":
            return {
                home: "/",
                casual: `${defaultParams}&style=casual`,
            };
        case "formal":
            return {
                home: "/",
                formal: `${defaultParams}&style=formal`,
            };
        case "gym":
            return {
                home: "/",
                gym: `${defaultParams}&style=gym`,
            };
        case "party":
            return {
                home: "/",
                party: `${defaultParams}&style=party`,
            };
        default:
            return {
                home: "/",
                products: `${defaultParams}`,
            };
    }
};
