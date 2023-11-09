export const SEX = "SEX";
export const STYLE = "STYLE";
export const ONSALE = "ONSALE";
export const CLEAR = "CLEAR";

export const setGenderParametre = (sex) => {
    return {
        type: SEX,
        payload: sex,
    };
};
export const setStyleParametre = (style) => {
    return {
        type: STYLE,
        payload: style,
    };
};
export const setOnSaleParametre = () => {
    return {
        type: ONSALE,
        payload: true,
    };
};
export const clearParametre = () => {
    return {
        type: CLEAR,
    };
};
