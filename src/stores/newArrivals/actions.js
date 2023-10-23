import axios from "axios";

export const GET_NEW_ARRIVALS_LIST = "GET_NEW_ARRIVALS_LIST";

export const addArrivalsList = () => async (dispatch) => {
    try {
        axios
            .get(
                "https://shopcoserver-git-main-chesterfalmen.vercel.app/api/goods/10"
            )
            .then((response) => {
                dispatch({
                    type: GET_NEW_ARRIVALS_LIST,
                    payload: response.data,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    } catch (error) {
        console.error("addArrivalsList server error", error);
    }
};
