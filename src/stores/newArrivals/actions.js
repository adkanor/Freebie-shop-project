export const GET_NEW_ARRIVALS_LIST = "GET_NEW_ARRIVALS_LIST";

export const addArrivalsList = (items) => ({
    type: GET_NEW_ARRIVALS_LIST,
    payload: items
});