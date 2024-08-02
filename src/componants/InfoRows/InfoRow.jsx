import React, { useState } from "react";
import styles from "../../style/products2/infoRows.module.css";

function InfoRow(props) {
    const [isContentFirst, setIsContentFirst] = useState(props.contentFirst);

    function handleClick() {
        setIsContentFirst(!isContentFirst);
    }

    return (
        <>
            {isContentFirst ? (
                <div className={styles.container}>
                    <div className={styles.descContainer}>
                        <h2>{props.title}</h2>
                        <h1>{props.cont}</h1>
                        <p>{props.desc}</p>
                        <div className={styles.BtnContainer}>
                            <button onClick={handleClick}>Know More</button>
                        </div>
                    </div>
                    <div className={styles.imgContainer}>
                        <img src={props.src} alt={props.title} />
                    </div>
                </div>
            ) : (
                <div className={styles.container}>
                    <div className={styles.imgContainer}>
                        <img src={props.src} alt={props.title} />
                    </div>
                    <div className={styles.descContainer}>
                        <h2>{props.title}</h2>
                        <h1>{props.cont}</h1>
                        <p>{props.desc}</p>
                        <div className={styles.BtnContainer}>
                            <button onClick={handleClick}>Know More</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default InfoRow;
