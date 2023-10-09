import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import store from "./stores/store";
import {Provider} from "react-redux";
import {GoogleOAuthProvider} from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Provider store={store}>
            <BrowserRouter>
                <GoogleOAuthProvider
                    clientId={"1067707080438-8h0es3omklr0q43jc6435pf331576ftp.apps.googleusercontent.com"}>
                    <App/>
                </GoogleOAuthProvider>
            </BrowserRouter>
        </Provider>,
    </>
);
