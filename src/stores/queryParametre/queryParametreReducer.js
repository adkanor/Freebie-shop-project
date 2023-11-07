/* eslint-disable */
import { SEX, STYLE, ONSALE, CLEAR } from "./action";
const initialState = {};

const queryParametreReducer = (state = initialState, action) => {
    console.log(action.payload);

    switch (action.type) {
        case SEX: {
            return {
                page: 1,
                limit: 9,
                sex: action.payload,
            };
        }
        case ONSALE: {
            return {
                page: 1,
                limit: 9,
                hasdiscount: action.payload,
            };
        }
        case STYLE: {
            return {
                page: 1,
                limit: 9,
                style: action.payload,
            };
        }
        case CLEAR: {
            return initialState;
        }
        default:
            return state;
    }
};
export default queryParametreReducer;
