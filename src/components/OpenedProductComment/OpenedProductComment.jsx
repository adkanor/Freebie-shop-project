import React from "react";
import style from "./OpenedProductComment.module.css";
import StarRating from "../StarRating/StarRating";
import PropTypes from "prop-types";
import { formatDate } from "../../utils/dateformatting";

function OpenedProductComment({ mark, username, text, date }) {
    return (
        <article className={style.commentWrapper}>
            <StarRating rating={mark} starSize={"1.4rem"} />
            <h6 className={style.username}>{username}</h6>
            <p className={style.commentP}>{text}</p>
            <p className={style.commentDate}>
                Posted on
                <time dateTime={date}>
                    {" " + formatDate(date)}
                </time>
            </p>
        </article>
    );
}

OpenedProductComment.propTypes = {
    mark: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
};

export default OpenedProductComment;
