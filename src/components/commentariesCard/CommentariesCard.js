import React from "react";
import approvedIcon from "../../assets/icons/approvedUserIcon/approvedUserIcon.svg";
import style from "./commentariesCard.module.css";
import StarRating from "../StarRating/StarRating";
import PropTypes from "prop-types";


const CommentariesCard = ({name, commentaries, rating}) => {
    return (
        <div className={style.commentariesWrapper}>
            <StarRating rating={parseInt(rating)} starSize={"23px"}/>
            <div className={style.commentariesUserInfo} >
                <p className={style.commentariesUserName}>{name}</p>
                <img src={approvedIcon} alt={"approvedIcon"} />
            </div>
            <p className={style.commentariesText}>{commentaries}</p>
            
        </div>
    );
};

CommentariesCard.propTypes = {
    name:PropTypes.string.isRequired,
    commentaries:PropTypes.string.isRequired,
    rating:PropTypes.string.isRequired
    
};

export default CommentariesCard;