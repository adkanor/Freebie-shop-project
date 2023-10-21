import axios from "axios";

export const GET_TOP_SALE_LIST = "GET_TOP_SALE_LIST";

export const addTopSellingList = () => async (dispatch) => {
    try {
        axios
            .get(
                "https://shopcoserver-git-main-chesterfalmen.vercel.app/api/getRatingGoods/12"
            )
            .then((response) => {
                dispatch({
                    type: GET_TOP_SALE_LIST,
                    payload: response.data,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    } catch (error) {
        console.error("addTopSellingList api error", error);
    }
};


