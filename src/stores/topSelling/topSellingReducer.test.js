import topSellingReducer from "./topSellingReducer";
import { GET_TOP_SALE_LIST } from "./actions";

describe("topSellingReducer", () => {
    it("should return the initial state", () => {
        expect(topSellingReducer(undefined, {})).toEqual([]);
    });

    it("should handle GET_TOP_SALE_LIST", () => {
        const mockPayload = [{ id: 1, name: "Product 1" }, { id: 2, name: "Product 2" }];
        const mockAction = { type: GET_TOP_SALE_LIST, payload: mockPayload };
        expect(topSellingReducer([], mockAction)).toEqual(mockPayload);
    });

    it("should not modify state for unknown action type", () => {
        const mockState = [{ id: 1, name: "Product 1" }, { id: 2, name: "Product 2" }];
        const mockAction = { type: "UNKNOWN_ACTION", payload: { id: 3, name: "Product 3" } };
        expect(topSellingReducer(mockState, mockAction)).toEqual(mockState);
    });
});