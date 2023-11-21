import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Rating } from "react-simple-star-rating";
import styles from "./AddComment.module.css";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import axios from "axios";
import { URL } from "../../variables";
/*eslint-disable*/

const fillColorArray = ["#f17a45", "#f19745", "#f1a545", "#f1b345", "#f1d045"];

const AddComment = ({ id, closeFunc, submitFunc }) => {
    const [rating, setRating] = useState(0);
    const [commentText, setCommentText] = useState("");
    const tooltipArray = ["Terrible", "Bad", "Average", "Great", "Awesome"];
    const isPersonAutorised = useSelector(
        (state) => state.authorizationReducer.isAuth
    );

    function handleInput(value) {
        setCommentText(value);
    }

    function checkFields() {
        switch (true) {
            case !rating && isPersonAutorised:
                return "No rating";
            case !commentText && isPersonAutorised:
                return "No comment text";
            default:
                return null;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const fieldsCheck = checkFields();
        if (fieldsCheck) {
            toast.error(fieldsCheck);
        } else {
            const token = localStorage.getItem("token");
            axios
                .post(
                    `${URL}postcomments`,
                    {
                        id_good: id,
                        text: commentText,
                        rating: rating,
                    },
                    {
                        headers: {
                            Authorization: token,
                        },
                    }
                )
                .then((res) => {
                    if (res.data.status !== 200) {
                        toast.error("Error during posting comment");
                    } else {
                        submitFunc(res.data.newComment);
                        toast.success("New comment added");
                    }
                })
                .catch((error) => {
                    console.error(error);
                    toast.error("Error during posting comment");
                });
            closeFunc();
        }
    }

    return (
        <div className={styles.modalWrapper} onClick={closeFunc}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={styles.wrapper}
            >
                <button onClick={closeFunc} className={styles.close}>
                    ×
                </button>
                <form className={styles.leaveCommentWrapper} action="">
                    <Rating
                        size={25}
                        onClick={(rate) => setRating(rate)}
                        showTooltip
                        tooltipClassName={styles.tooltip}
                        transition
                        fillColorArray={fillColorArray}
                        tooltipArray={tooltipArray}
                        tooltipStyle={{
                            marginLeft: "5px",
                        }}
                    />
                    <div className={styles.textAreaWrapper}>
                        <TextareaAutosize
                            value={commentText}
                            onChange={(event) =>
                                handleInput(event.target.value)
                            }
                            spellCheck={false}
                            maxLength={250}
                            placeholder="Enter commentary"
                        />
                        <span>{commentText.length}/250</span>
                    </div>
                    <button
                        className={styles.submitButton}
                        onClick={(e) => handleSubmit(e)}
                        type="submit"
                    >
                        Leave comment
                    </button>
                </form>
            </div>
        </div>
    );
};

AddComment.propTypes = {
    id: PropTypes.string,
    closeFunc: PropTypes.func.isRequired,
    submitFunc: PropTypes.func
};

export default AddComment;
