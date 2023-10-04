import React from "react";
import styles from "./Pagination.module.css";

import ArrowLeft from "../../assets/icons/ArrowsSlider/arrowLeft.svg";
import ArrowRight from "../../assets/icons/ArrowsSlider/arrowRight.svg";



function Pagination() {





    return ( 
        <div className={styles.PaginateWrapper}>
            <div className={styles.PaginateBox}>
                <div className={styles.PaginateBtn}>
                    <div className={styles.ArrowBox}>
                        <img
                            className={styles.Arrow}
                            src={ArrowLeft}
                            alt="ArrowLeft"
                            width={16}
                        />
                    </div>
                    <div className={styles.BtnTxt}>
                        Previous
                    </div>
                </div>
                <div className={styles.NavigateBtn}>

                </div>
                <div className={styles.PaginateBtn}>
                    <div className={styles.BtnTxt}>
                        Next
                    </div>
                    <div className={styles.ArrowBox}>
                        <img
                            className={styles.Arrow}
                            src={ArrowRight}
                            alt="ArrowRight"
                            width={16}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pagination;