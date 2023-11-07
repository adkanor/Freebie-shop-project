export const paramsBrouserStr = (searchParams) => {
    let paramsObject = {};

    for (const [key, value] of searchParams.entries()) {
        paramsObject[key] = value;
    }
    return paramsObject;
};