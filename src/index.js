import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./stores/store";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import GMAILID from "./config";
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(process.env.GMAIL_ID);
root.render(
    <>
        <Provider store={store}>
            <BrowserRouter>
                <GoogleOAuthProvider
                    script-src={"https://accounts.google.com/gsi/"}
                    clientId={process.env.GMAIL_ID}
                >
                    <App />
                </GoogleOAuthProvider>
            </BrowserRouter>
        </Provider>
    </>
);
