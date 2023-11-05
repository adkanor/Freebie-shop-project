export const stringifyParams = (params) => {
    const keys = Object.keys(params);
    const keyValuePairs = keys
        .filter((key) => params[key] !== "")
        .map((key) => `${key}=${params[key]}`);
    return keyValuePairs.join("&");
};
