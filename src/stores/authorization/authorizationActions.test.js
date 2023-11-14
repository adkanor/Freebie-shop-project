import { checkAuthorization, CHECK_AUTHORIZATION } from "./actions";

import authorizationReducer from "./authorizationReducer";
import axios from "axios";

jest.mock("axios");

describe("Authorization Actions", () => {

    it("should create an action to check authorization with error response", async () => {
        const token = "your-token";
        const errorResponse = {
            response: {
                status: 500,
                data: { message: "Server error" },
            },
        };
        const dispatch = jest.fn();
        const getState = jest.fn();

        axios.post.mockRejectedValue(errorResponse);

        await checkAuthorization(token)(dispatch, getState);

        const expectedAction = {
            type: CHECK_AUTHORIZATION,
            payload: {
                errorCode: errorResponse.response.status,
                errorMsg: errorResponse.response.data.message,
            },
        };

        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
});

describe("Authorization Reducer", () => {
    it("should handle CHECK_AUTHORIZATION action with data correctly", () => {
        const initialState = {isAuth: false};
        const action = {
            type: CHECK_AUTHORIZATION,
            payload: { yourData: "sample data" },
        };

        const state = authorizationReducer(initialState, action);

        expect(state).toEqual({isAuth: action.payload});
    });

    it("should handle CHECK_AUTHORIZATION action with error information correctly", () => {
        const initialState = {isAuth:{}};
        const errorResponse = {

            response: {
                status: 500,
                data: { message: "Server error" },
            }
        };
        const action = {
            type: CHECK_AUTHORIZATION,
            payload: errorResponse,
        };

        const state = authorizationReducer(initialState, action);

        expect(state).toEqual({isAuth: action.payload});
    }); 

    it("should return the initial state for other actions", () => {
        const initialState = {response: {
            status: 500,
            data: { message: "Server error" },
        }};
        const action = {
            type: "OTHER_ACTION_TYPE",
            payload: { someData: "data" },
        };

        const state = authorizationReducer(initialState, action);

        expect(state).toEqual(initialState);
    });
});
