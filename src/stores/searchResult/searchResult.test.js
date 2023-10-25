import axios from "axios";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import {
  getSearchResult,
  GET_SEARCH_RESULT,
} from "./actions";
import searchResultReducer from "./searchResultReducer";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock("axios");

describe("Search Result Actions", () => {
  it("should create an action to get search result with success response", () => {
    const word = "sample-word";
    const expectedData = [{ id: 1, name: "Product 1" }, { id: 2, name: "Product 2" }];
    const dispatch = jest.fn();

    axios.post.mockResolvedValue({ data: { resultArray: expectedData } });

    const expectedActions = [
      {
        type: GET_SEARCH_RESULT,
        payload: expectedData,
      },
    ];

    return getSearchResult(word)(dispatch).then(() => {
      expect(dispatch.mock.calls[0][0]).toEqual(expectedActions[0]);
    });
  });

  it("should create an action to get search result with error response", () => {
    const word = "sample-word";
    const errorResponse = {
      response: {
        status: 500,
        data: { message: "Server error" },
      },
    };
    const dispatch = jest.fn();

    axios.post.mockRejectedValue(errorResponse);

    const expectedActions = [
      {
        type: GET_SEARCH_RESULT,
        payload: {
          errorCode: errorResponse.response.status,
          errorMsg: errorResponse.response.data.message,
        },
      },
    ];

    return getSearchResult(word)(dispatch).then(() => {
      expect(dispatch.mock.calls[0][0]).toEqual(expectedActions[0]);
    });
  });
});

describe("Search Result Reducer", () => {
  it("should handle GET_SEARCH_RESULT action with data correctly", () => {
    const initialState = [];
    const action = {
      type: GET_SEARCH_RESULT,
      payload: [{ id: 1, name: "Product 1" }, { id: 2, name: "Product 2" }],
    };

    const state = searchResultReducer(initialState, action);

    expect(state).toEqual(action.payload);
  });

  it("should handle GET_SEARCH_RESULT action with error information correctly", () => {
    const initialState = [];
    const errorResponse = { errorCode: 500, errorMsg: "Server error" };
    const action = {
      type: GET_SEARCH_RESULT,
      payload: errorResponse,
    };

    const state = searchResultReducer(initialState, action);

    expect(state).toEqual(action.payload);
  });

  it("should return the initial state for other actions", () => {
    const initialState = [];
    const action = {
      type: "OTHER_ACTION_TYPE",
      payload: { someData: "data" },
    };

    const state = searchResultReducer(initialState, action);

    expect(state).toEqual(initialState);
  });
});
