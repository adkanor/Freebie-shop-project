import React, {useEffect, useState} from "react";
import axios from "axios";
import PropTypes from "prop-types";
import OpenedProductComment from "../OpenedProductComment/OpenedProductComment";
import styles from "./DetaliComentsCard.module.css";
import BlackButton from "../Button/Button";
import {URL} from "../../variables";
/*eslint-disable*/

const DetaiLComentsCard = ({details, idGoods, FAQ}) => {
    const [tabNum, setTabNum] = useState(0);
    const [comments, setComments] = useState([]);
    const detailsParts = details
        .split("&&")
        .map((substring) => substring.split(":"));

    useEffect(() => {
        axios
            .get(`${URL}getcomments/?page=1&limit=10&sort=new&good=${idGoods}`)
            .then((res) => {
                res.data.sort((a, b) => b.rating - a.rating);
                setComments(res.data);
            })
            .catch((error) => {
                console.error("404", error);
            });
    }, [idGoods]);

    function filterComments(value) {
        switch (value) {
        case "high":
            setComments([...comments].sort((a, b) => b.rating - a.rating));
            break;
        case "low":
            setComments([...comments].sort((a, b) => a.rating - b.rating));
            break;
        default:
            break;
        }
    }

    return (
        <div>
            <ul className={styles.tabsWrapper}>
                <li
                    className={`${styles.tab} ${
                        tabNum === 0 ? styles.active : ""
                    }`}
                >
                    <button onClick={() => setTabNum(0)}>
                        Product Details
                    </button>
                </li>
                <li
                    className={`${styles.tab} ${
                        tabNum === 1 ? styles.active : ""
                    }`}
                >
                    <button onClick={() => setTabNum(1)}>
                        Rating & Reviews
                    </button>
                </li>
                <li
                    className={`${styles.tab} ${
                        tabNum === 2 ? styles.active : ""
                    }`}
                >
                    <button onClick={() => setTabNum(2)}>FAQs</button>
                </li>
            </ul>
            <div className={styles.tabsContent}>
                {tabNum === 0 && (
                    <div className={styles.detailsPage}>
                        {!details ? (
                            <h3 className={styles.commentsH}>
                                No product details added
                            </h3>
                        ) : (
                            <>
                                <div className={styles.commentsHeader}>
                                    <h3 className={styles.commentsH}>
                                        Product details
                                    </h3>
                                </div>
                                <p className={styles.description}>
                                    {detailsParts.map((detail, index) => (
                                        <React.Fragment key={index}>
                                            <strong>{detail[0]}:</strong> {detail[1]} <br/><br/>
                                        </React.Fragment>
                                    ))}
                                </p>
                            </>
                        )}
                    </div>
                )}
                {tabNum === 1 && (
                    <div className={styles.commentsPage}>
                        {comments.length < 1 ? (
                            <>
                                <h3 className={styles.commentsH}>
                                    No comments yet
                                </h3>
                                <BlackButton
                                    style={{
                                        backgroundColor: "black",
                                        padding: "16px 20px 16px 20px",
                                        marginTop: "0.7rem",
                                    }}
                                    text={"Write a Review"}
                                />
                            </>
                        ) : (
                            <>
                                <div className={styles.commentsHeader}>
                                    <h3 className={styles.commentsH}>
                                        All Reviews{" "}
                                        <span>({comments.length})</span>
                                    </h3>
                                    <div className={styles.commentBtnWrapper}>
                                        <div className={styles.selectWrapper}>
                                            <select
                                                onChange={(e) =>
                                                    filterComments(
                                                        e.target.value
                                                    )
                                                }
                                                className={
                                                    styles.commentsFilter
                                                }
                                                name="commentsFilter"
                                                defaultValue="high"
                                                data-testid="commentsFilter"
                                            >
                                                <option value="high">
                                                    High to low
                                                </option>
                                                <option value="low">
                                                    Low to high
                                                </option>
                                            </select>
                                        </div>
                                        <BlackButton
                                            style={{
                                                backgroundColor: "black",
                                                padding: "16px 20px 16px 20px",
                                            }}
                                            text={"Write a Review"}
                                        />
                                    </div>
                                </div>
                                <div className={styles.commentsDetaliesWrapper}>
                                    {comments.map((item) => (
                                        <OpenedProductComment
                                            key={item._id}
                                            username={
                                                item.firstName +
                                                " " +
                                                item.lastName
                                            }
                                            text={item.text}
                                            mark={item.rating}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                )}
                {tabNum === 2 && (
                    <div className={styles.detailsPage}>
                        {!FAQ ? (
                            <h3 className={styles.commentsH}>No FAQ added</h3>
                        ) : (
                            <>
                                <div className={styles.commentsHeader}>
                                    <h3 className={styles.commentsH}>FAQ</h3>
                                </div>
                                <p data-testid="description" className={styles.description}>{FAQ}</p>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

DetaiLComentsCard.propTypes = {
    details: PropTypes.string,
    idGoods: PropTypes.string.isRequired,
    FAQ: PropTypes.string,
};

export default DetaiLComentsCard;
