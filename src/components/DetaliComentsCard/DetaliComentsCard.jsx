import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import OpenedProductComment from "../OpenedProductComment/OpenedProductComment";
import styles from "./DetaliComentsCard.module.css";
import BlackButton from "../Button/Button";
import { URL } from "../../variables";
import AddComment from "../AddComment/AddComment";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
/*eslint-disable*/

const DetaiLComentsCard = ({ details, idGoods, FAQ }) => {
    const [tabNum, setTabNum] = useState(0);
    const [initialComments, setInitialComments] = useState([]);
    const [comments, setComments] = useState([]);
    const [isAddingOpened, setIsAddingOpened] = useState(false);
    const [isAddingPossible, setIsAddingPossible] = useState(false);
    const optionList = useRef(null);
    const detailsParts = details
        .split("&&")
        .map((substring) => substring.split(":"));
    const isPersonAutorised = useSelector(
        (state) => state.authorizationReducer.isAuth
    );
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios
            .get(`${URL}getComments/?page=1&limit=6&sort=new&good=${idGoods}`)
            .then((res) => {
                setInitialComments(res.data);
                setComments(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
        axios
            .post(
                `${URL}hasCommentsAdd`,
                {
                    id_good: idGoods,
                },
                {
                    headers: {
                        Authorization: token,
                    },
                }
            )
            .then((res) => {
                if (res.data.status !== 200) {
                    setIsAddingPossible(false);
                } else {
                    setIsAddingPossible(true);
                    if (location.state?.fromComponent === "orders") {
                        setTabNum(1);
                        setIsAddingOpened(true);
                    }
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [idGoods]);

    function filterComments(value) {
        switch (value) {
            case "high":
                setComments(
                    [...initialComments].sort((a, b) => b.rating - a.rating)
                );
                break;
            case "low":
                setComments(
                    [...initialComments].sort((a, b) => a.rating - b.rating)
                );
                break;
            case "new":
                setComments(initialComments);
                break;
            default:
                break;
        }
    }

    function checkAccess() {
        if (!isAddingPossible) {
            toast.error("You should order product first!");
        } else {
            setIsAddingOpened(true);
        }
    }

    function addingFunction(newComment) {
        if (optionList.current) {
            optionList.current.value = "new";
        }
        if (comments.length >= 6) {
            const newComments = initialComments.slice(0, -1);
            newComments.unshift(newComment);
            setInitialComments(newComments);
            setComments(newComments);
        } else {
            const newComments = [...initialComments];
            newComments.unshift(newComment);
            setInitialComments(newComments);
            setComments(newComments);
        }
    }

    return (
        <>
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
                                                <strong>{detail[0]}:</strong>{" "}
                                                {detail[1]} <br />
                                                <br />
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
                                    {isPersonAutorised && (
                                        <BlackButton
                                            style={{
                                                backgroundColor: "black",
                                                padding: "16px 20px 16px 20px",
                                                marginTop: "0.7rem",
                                            }}
                                            text={"Write a Review"}
                                            onClick={() => checkAccess()}
                                        />
                                    )}
                                </>
                            ) : (
                                <>
                                    <div className={styles.commentsHeader}>
                                        <h3 className={styles.commentsH}>
                                            All Reviews{" "}
                                            <span>({comments.length})</span>
                                        </h3>
                                        <div
                                            className={styles.commentBtnWrapper}
                                        >
                                            <div
                                                className={styles.selectWrapper}
                                            >
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
                                                    defaultValue="new"
                                                    data-testid="commentsFilter"
                                                    ref={optionList}
                                                >
                                                    <option value="new">
                                                        New to old
                                                    </option>
                                                    <option value="high">
                                                        High to low
                                                    </option>
                                                    <option value="low">
                                                        Low to high
                                                    </option>
                                                </select>
                                            </div>
                                            {isPersonAutorised && (
                                                <BlackButton
                                                    style={{
                                                        backgroundColor:
                                                            "black",
                                                        padding:
                                                            "16px 20px 16px 20px",
                                                    }}
                                                    text={"Write a Review"}
                                                    onClick={() =>
                                                        checkAccess()
                                                    }
                                                />
                                            )}
                                        </div>
                                    </div>
                                    <div
                                        className={
                                            styles.commentsDetaliesWrapper
                                        }
                                    >
                                        {comments.map((item) => (
                                            <OpenedProductComment
                                                key={item._id}
                                                username={item.firstName}
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
                                <h3 className={styles.commentsH}>
                                    No FAQ added
                                </h3>
                            ) : (
                                <>
                                    <div className={styles.commentsHeader}>
                                        <h3 className={styles.commentsH}>
                                            FAQ
                                        </h3>
                                    </div>
                                    <p
                                        data-testid="description"
                                        className={styles.description}
                                    >
                                        {FAQ}
                                    </p>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
            {isAddingOpened && (
                <AddComment
                    id={idGoods}
                    closeFunc={() => {
                        setIsAddingOpened(false);
                    }}
                    submitFunc={(newComment) => {
                        addingFunction(newComment);
                    }}
                />
            )}
        </>
    );
};

DetaiLComentsCard.propTypes = {
    details: PropTypes.string,
    idGoods: PropTypes.string.isRequired,
    FAQ: PropTypes.string,
};

export default DetaiLComentsCard;
