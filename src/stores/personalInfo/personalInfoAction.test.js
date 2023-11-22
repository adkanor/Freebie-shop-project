import axios from "axios";
import {
    fetchUserData,
    setUserData,
    setUserDataError,
    SET_USER_DATA,
    SET_USER_DATA_ERROR,
} from "./action";
import { URL } from "../../variables";
jest.mock("axios");

describe("Redux Actions", () => {
    it("should create an action to set user data", () => {
        const userData = { name: "John Doe", email: "johndoe@example.com" };
        const expectedAction = {
            type: SET_USER_DATA,
            payload: userData,
        };
        expect(setUserData(userData)).toEqual(expectedAction);
    });

    it("should create an action to set user data error", () => {
        const error = "Network error";
        const expectedAction = {
            type: SET_USER_DATA_ERROR,
            payload: error,
        };
        expect(setUserDataError(error)).toEqual(expectedAction);
    });

    it("should fetch user data from the server and dispatch setUserData", async () => {
        const token = "yourAuthToken";
        const userData = { name: "John Doe", email: "johndoe@example.com" };
        const response = { data: { answer: userData } };

        axios.post.mockResolvedValue(response);

        const dispatch = jest.fn();
        await fetchUserData(token)(dispatch);

        expect(axios.post).toHaveBeenCalledWith(
            `${URL}aboutUser`,
            { token },
            {
                headers: {
                    Authorization: token,
                },
            }
        );

        expect(dispatch).toHaveBeenCalledWith(setUserData(userData));
    });

    it("should dispatch setUserDataError when there is an error fetching user data", async () => {
        const token = "yourAuthToken";
        const error = "Network error";

        axios.post.mockRejectedValue(new Error(error));

        const dispatch = jest.fn();
        await fetchUserData(token)(dispatch);

        expect(axios.post).toHaveBeenCalledWith(
            `${URL}aboutUser`,
            { token },
            {
                headers: {
                    Authorization: token,
                },
            }
        );

        expect(dispatch).toHaveBeenCalledWith(setUserDataError(error));
    });
});
