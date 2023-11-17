import axios from "axios";
import { URL } from "../../variables";
export const SET_USER_DATA = "SET_USER_DATA";
export const SET_USER_DATA_ERROR = "SET_USER_DATA_ERROR";
export const setUserData = (data) => ({
    type: SET_USER_DATA,
    payload: data,
});

export const setUserDataError = (error) => ({
    type: SET_USER_DATA_ERROR,
    payload: error,
});

export const fetchUserData = (token) => async (dispatch) => {
    try {
        const response = await axios.post(
            `${URL}aboutUser`,
            { token: token },
            {
                headers: {
                    Authorization: `${token}`,
                },
            }
        );
        dispatch(setUserData(response.data.answer));
    } catch (error) {
        dispatch(setUserDataError(error.message));
    }
};
