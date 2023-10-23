import axios from "axios";
// axios = require("axios");
export const CHECK_AUTHORIZATION = "GET_RES";


export const checkAuthorization = (token) => async (dispatch, getState) => {
    
    try {
        const response = await axios.post(
            "https://shopcoserver-git-main-chesterfalmen.vercel.app/api/isAuth",
            "",
            {
                headers: {
                    Authorization: token,
                },
            }
        );

        dispatch({
            type: CHECK_AUTHORIZATION,
            payload: response.data,
        });
    } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
        const errorResponse = {
            errorCode: error.response.status,
            errorMsg: error.response.data.message,
        };
        dispatch({
            type: CHECK_AUTHORIZATION,
            payload: errorResponse,
        });
    }
};