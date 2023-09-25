import React from "react";
import style from "./Login.module.css";

const Login = () => {
    return (
        <div className={`section ${ style.loginWrapper}`}>
            <div>

            </div>
            <div>
                <p className={style.loginTitle}>Log in to Exclusive</p>
                <p className={style.loginSubtitle} >Enter your details below</p>
            </div>

        </div>
    );
};

export default Login;