import * as getArrivals_TopSelling from "../types/type";

export const addArrivalsList = (items) =>({
    type:getArrivals_TopSelling.GET_NEW_ARRIVALS_LIST,
    payload: items
});


export const addTopSellingList = (items) =>({
    type:getArrivals_TopSelling.GET_TOP_SALE_LIST,
    payload: items
});