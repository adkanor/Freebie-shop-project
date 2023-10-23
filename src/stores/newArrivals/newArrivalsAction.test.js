import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import { addArrivalsList, GET_NEW_ARRIVALS_LIST } from "./actions";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock("axios");

describe("addArrivalsList action", () => {
    it("dispatches GET_NEW_ARRIVALS_LIST when data is fetched successfully", () => {
        const response = {
            data: "someData",
        };
        axios.get.mockResolvedValue(response);

        const expectedActions = [
            { type: GET_NEW_ARRIVALS_LIST, payload: response.data },
        ];
        const store = mockStore({});

        return store.dispatch(addArrivalsList()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("dispatches an error when data fetching fails", () => {
        const error = "Some error message";
        axios.get.mockRejectedValue(new Error(error));

        const expectedActions = [];
        const store = mockStore({});

        return store.dispatch(addArrivalsList()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
