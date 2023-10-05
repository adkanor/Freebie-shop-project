import {addArrivalsList, addTopSellingList} from "../actions/actions";


export const saveArrivalsListOperation = (items) => (dispatch) => {
    dispatch(addArrivalsList(items));
};

export const saveTopSellingListOperations = (items) => (dispatch) => {
    dispatch(addTopSellingList(items));
};