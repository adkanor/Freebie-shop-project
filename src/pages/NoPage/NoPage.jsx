import React from "react";
import style from "./NoPage.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";


const NoPage = () => {
    const navigate = useNavigate();
    return <div className = {`section ${ style.noPageWrapper }`}>
        <div className={style.noPageTitle}>404 not found</div>
        <p className={style.noPageSubtitle}>Your visited page not found. You may go home page.</p>
        <Button onClick={() => navigate(-1)} text={"Go back"} style={{
            marginTop:"20px",
            padding: "16px 48px",
            backgroundColor: "var(--login-btn)",
            color: "var(--white-text)",
            border: "none",
        }}/>

    </div>;

};

export default NoPage;
