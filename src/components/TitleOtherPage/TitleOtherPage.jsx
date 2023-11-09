import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import style from "./TitleOtherPage.module.css";


const TitleOtherPage = ({paramsObj}) => {
    const [title, setTitle] = useState();

    useEffect(() => {
        if (paramsObj.sort === "new") {
            setTitle("New approval");
        }
        if (paramsObj.sort === "topselling") {
            setTitle("topselling");
        }
        // eslint-disable-next-line
    }, [paramsObj]);

    return (
        <div className={style.title}>
            {title}
        </div>
    );
};

TitleOtherPage.propTypes = {
    paramsObj: PropTypes.object,
};


export default TitleOtherPage;