import personalInfoReducer from "./personalInfoReducer";
import { setUserData, setUserDataError } from "./action";

describe("personalInfoReducer", () => {
    it("should return the initial state", () => {
        const initialState = {
            userData: null,
            error: null,
        };
        expect(personalInfoReducer(undefined, {})).toEqual(initialState);
    });

    it("should handle SET_USER_DATA action", () => {
        const userData = { name: "John Doe", email: "johndoe@example.com" };
        const action = setUserData(userData);

        const expectedState = {
            userData,
            error: null,
        };

        expect(personalInfoReducer(undefined, action)).toEqual(expectedState);
    });

    it("should handle SET_USER_DATA_ERROR action", () => {
        const error = "Network error";
        const action = setUserDataError(error);

        const expectedState = {
            userData: null,
            error,
        };

        expect(personalInfoReducer(undefined, action)).toEqual(expectedState);
    });

    it("should handle SET_USER_DATA action with existing state", () => {
        const initialState = {
            userData: { name: "Old Name", email: "old@example.com" },
            error: null,
        };

        const userData = { name: "John Doe", email: "johndoe@example.com" };
        const action = setUserData(userData);

        const expectedState = {
            userData,
            error: null,
        };

        expect(personalInfoReducer(initialState, action)).toEqual(
            expectedState
        );
    });

    it("should handle SET_USER_DATA_ERROR action with existing state", () => {
        const initialState = {
            userData: { name: "Old Name", email: "old@example.com" },
            error: null,
        };

        const error = "New error";
        const action = setUserDataError(error);

        const expectedState = {
            userData: null,
            error,
        };

        expect(personalInfoReducer(initialState, action)).toEqual(
            expectedState
        );
    });

    it("should handle unknown action and return the current state", () => {
        const currentState = {
            userData: { name: "Current Name", email: "current@example.com" },
            error: null,
        };

        const action = { type: "UNKNOWN_ACTION" };

        expect(personalInfoReducer(currentState, action)).toEqual(currentState);
    });
    it("should set initial state with error as null", () => {
        const initialState = personalInfoReducer(undefined, {});
        expect(initialState).toEqual({
            userData: null,
            error: null,
        });
    });
});
