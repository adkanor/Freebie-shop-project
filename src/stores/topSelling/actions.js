export const GET_TOP_SALE_LIST = "GET_TOP_SALE_LIST";

export const addTopSellingList = (items) => ({
    type: GET_TOP_SALE_LIST,
    payload: items
});