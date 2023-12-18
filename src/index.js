import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./stores/store";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import { GMAIL } from "./config";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <Provider store={store}>
            <BrowserRouter>
                <GoogleOAuthProvider
                    script-src={"https://accounts.google.com/gsi/"}
                    clientId="260867558541-e8p1u9g7t7kqmrcbntjh0i1614i1025u.apps.googleusercontent.com"
                >
                    <App />
                </GoogleOAuthProvider>
            </BrowserRouter>
        </Provider>
    </>
);
