import axios from "axios";
export const SET_ORDER = "GET_RES";


export const setOrder = (dataLoad, token) => async (dispatch, getState) => {
    
    try {
        const response = await axios.post(
            "https://shopcoserver-git-main-chesterfalmen.vercel.app/api/orders/add",
            dataLoad,
            {
                headers: {
                    Authorization: token,
                },
            }
        );

        dispatch({
            type: SET_ORDER,
            payload: response.data,
        });
    } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
        const errorResponse = {
            errorCode: error.response.status,
            errorMsg: error.response.data.message,
        };
        dispatch({
            type: SET_ORDER,
            payload: errorResponse,
        });
    }
};