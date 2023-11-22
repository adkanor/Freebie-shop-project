import React from "react";
import approvedIcon from "../../assets/icons/approvedUserIcon/approvedUserIcon.svg";
import styles from "./CommentsCard.module.css";
import StarRating from "../StarRating/StarRating";
import PropTypes from "prop-types";

const CommentsCard = ({
    firstName,
    commentaries,
    rating,
    style,
    className,
}) => {
    const cardStyle = {
        ...style,
    };
    const author = firstName;

    const truncatedCommentaries =
        commentaries.length > 130
            ? commentaries.substring(0, 100) + "..."
            : commentaries;

    return (
        <div
            style={cardStyle}
            className={`${styles.commentsWrapper} ${className}`}
        >
            <StarRating rating={parseInt(rating)} starSize={"23px"} />
            <div className={styles.commentsUserInfo}>
                <p className={styles.commentsUserName}>{author}</p>
                <img src={approvedIcon} alt={"approvedIcon"} />
            </div>

            <p className={styles.commentsText}>{truncatedCommentaries}</p>
        </div>
    );
};

CommentsCard.propTypes = {
    firstName: PropTypes.string.isRequired,
    commentaries: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
};

export default CommentsCard;
