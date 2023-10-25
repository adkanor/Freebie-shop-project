import React, {useEffect, useState} from "react";
import axios from "axios";
import PropTypes from "prop-types";
import CommentsCard from "../CommentsCard/CommentsCard";
import styles from "./DetaliComentsCard.module.css";


const DetaiLComentsCard = ({idGoods}) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios
            .get(`https://shopcoserver-git-main-chesterfalmen.vercel.app/api/comments/${idGoods}`)
            .then((res) => {
                setComments(res.data);
            })
            .catch((error) => {
                console.error("404", error);
            });

    }, [idGoods]);

    const commentsBlock = comments.map((item) =>
        <CommentsCard
            data-testid="comments-card"
            key={item._id}
            firstName={item.firstName}
            lastName={item.lastName}
            commentaries={item.text}
            rating={item.rating}
            className={styles.commentsItem}
        />
    );

    return (
        <div className={styles.commentsDetaliesWrapper} data-testid="comments-details-wrapper">
            {commentsBlock}
        </div>
    );
};

DetaiLComentsCard.propTypes = {
    idGoods: PropTypes.string
};

export default DetaiLComentsCard;