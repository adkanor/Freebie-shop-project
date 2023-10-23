import configureStore from "redux-mock-store"; // Импортируйте библиотеку для создания мок-стора Redux
import thunk from "redux-thunk";
import axios from "axios";
import { addArrivalsList, GET_NEW_ARRIVALS_LIST } from "./actions";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock("axios"); // Мокаем axios

describe("addArrivalsList action", () => {
    it("dispatches GET_NEW_ARRIVALS_LIST when data is fetched successfully", () => {
        const response = {
            data: "someData", // Здесь можете указать тестовые данные, которые возвращает сервер
        };
        axios.get.mockResolvedValue(response); // Мокаем успешный ответ от сервера

        const expectedActions = [
            { type: GET_NEW_ARRIVALS_LIST, payload: response.data },
        ];
        const store = mockStore({}); // Создаем мок-стор

        return store.dispatch(addArrivalsList()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("dispatches an error when data fetching fails", () => {
        const error = "Some error message"; // Тестовое сообщение об ошибке
        axios.get.mockRejectedValue(new Error(error)); // Мокаем ошибку от сервера

        const expectedActions = []; // Здесь ожидается, что не будет вызвано действие GET_NEW_ARRIVALS_LIST
        const store = mockStore({});

        return store.dispatch(addArrivalsList()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
