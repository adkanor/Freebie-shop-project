import React from "react";
import approvedIcon from "../../assets/icons/approvedUserIcon/approvedUserIcon.svg";
import styles from "./CommentsCard.module.css";
import StarRating from "../StarRating/StarRating";
import PropTypes from "prop-types";


const CommentsCard = ({firstName, lastName, commentaries, rating, style}) => {
    const cardStyle = {
        ...style,

    };
    const author = firstName + " " + lastName.charAt(0) +".";
    return (
        <div style={cardStyle} className={styles.commentsWrapper}>
            <StarRating rating={parseInt(rating)} starSize={"23px"}/>
            <div className={styles.commentsUserInfo} >
                <p className={styles.commentsUserName}>{author}</p>
                <img src={approvedIcon} alt={"approvedIcon"} />
            </div>




            <p className={styles.commentsText}>{commentaries}</p>
            
        </div>
    );
};

CommentsCard.propTypes = {
    firstName:PropTypes.string.isRequired,
    lastName:PropTypes.string.isRequired,
    commentaries:PropTypes.string.isRequired,
    rating:PropTypes.number.isRequired,
    style:PropTypes.object
    
};

export default CommentsCard;