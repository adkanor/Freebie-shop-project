import React from "react";
import style from "./NoPage.module.css";
import { useNavigate } from "react-router-dom";


const NoPage = () => {
    const navigate = useNavigate();
    return <div className={style.noPageWrapper}>

        <div>404 not found</div>
        <button onClick={() => navigate(-1)}>Go back</button>
    </div>;

};

export default NoPage;
