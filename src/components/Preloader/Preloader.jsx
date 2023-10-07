import React from "react";
import styles from "./Preloader.module.css";

function Preloader() {
    return ( 
        <div className={styles.PreloaderWrapper}>
            <div className={styles.Preloader}></div>
        </div>
    );
}

export default Preloader;