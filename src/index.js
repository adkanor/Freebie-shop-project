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
                    script-src={"https://accounts.google.com/gsi/"}
                    clientId={"260867558541-ctmfm0db7e62mj2dlm4881mp8th6g1cc.apps.googleusercontent.com"}>
                    <App/>
                </GoogleOAuthProvider>
            </BrowserRouter>
        </Provider>,
    </>
);
