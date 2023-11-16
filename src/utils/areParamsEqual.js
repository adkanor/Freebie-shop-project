export function areParamsEqual(params1, params2) {
    const keys1 = Object.keys(params1);
    const keys2 = Object.keys(params2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (params1[key] !== params2[key]) {
            return false;
        }
    }

    return true;
}
