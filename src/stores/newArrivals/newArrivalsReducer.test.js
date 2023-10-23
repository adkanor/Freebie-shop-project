import newArrivalsReducer from "./newArrivalsReducer";
import { GET_NEW_ARRIVALS_LIST } from "./actions";

describe("newArrivalsReducer", () => {
    it("should return the initial state", () => {
        const initialState = [];
        expect(newArrivalsReducer(undefined, {})).toEqual(initialState);
    });

    it("should handle GET_NEW_ARRIVALS_LIST action", () => {
        const action = {
            type: GET_NEW_ARRIVALS_LIST,
            payload: ["item1", "item2", "item3"],
        };
        const expectedState = ["item1", "item2", "item3"];

        expect(newArrivalsReducer([], action)).toEqual(expectedState);
    });

    it("should return the current state for an unknown action", () => {
        const currentState = ["item1", "item2"];
        const action = {
            type: "UNKNOWN_ACTION",
        };

        expect(newArrivalsReducer(currentState, action)).toEqual(currentState);
    });
});
