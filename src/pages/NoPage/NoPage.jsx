import React from "react";
import style from "./NoPage.module.css";
import { useNavigate } from "react-router-dom";


const NoPage = () => {
    const navigate = useNavigate();

    return <div className = {`section ${ style.noPageWrapper }`}>
        <div className={style.noPageTitle}>404 not found</div>
        <p className={style.noPageSubtitle}>Your visited page not found. You may go home page.</p>
        <button className={style.goBackBtn} onClick={() => navigate(-1)}>Go back</button>
    </div>;

};

export default NoPage;
