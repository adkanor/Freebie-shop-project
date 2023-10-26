import axios from "axios";
export const GET_SEARCH_RESULT = "GET_SEARCH_RESULT";

export const getSearchResult = (word) => async (dispatch, getState) => {
    
    try {
        const response = await axios.post(
            "https://shopcoserver-git-main-chesterfalmen.vercel.app/api/search",
            { word: word }
        );
        

        dispatch({
            type: GET_SEARCH_RESULT,
            payload: response.data.resultArray,
        });
    } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
        const errorResponse = {
            errorCode: error.response.status,
            errorMsg: error.response.data.message,
        };
        dispatch({
            type: GET_SEARCH_RESULT,
            payload: errorResponse,
        });
    }
};