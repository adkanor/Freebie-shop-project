import axios from "axios";
import { URL } from "../../variables";
export const CHECK_AUTHORIZATION = "CHECK_AUTHORIZATION";

// Send a POST request to the server endpoint for user authorization

export const checkAuthorization = (token) => async (dispatch) => {
    try {
        const response = await axios.post(`${URL}isAuth`, "", {
            headers: {
                Authorization: token,
            },
        });

        dispatch({
            type: CHECK_AUTHORIZATION,
            payload: response.data.userauth,
        });
    } catch (error) {
        console.error("Error message:", error);
        const errorResponse = {
            errorCode: error.response?.status || 500,
            errorMsg: error.response?.data?.message || "Internal Server Error",
        };
        dispatch({
            type: CHECK_AUTHORIZATION,
            payload: errorResponse,
        });
    }
};
