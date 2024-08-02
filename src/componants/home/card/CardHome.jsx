import React from "react";
import styles from "../../../style/common/CardHome.module.css";


function Card(props) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.CardMain}>
        <div className={styles.imgContainer}>
          <img src={props.src} alt={props.title} />
        </div>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <p>
          <b>{props.RealPrise}</b>
          <i>{props.icon}</i>
        </p>
        <button>SHOP NOW</button>
      </div>
    </div>
  );
}

export default Card;
