import React from "react";
import styles from "../../style/home/carousel.module.css";

function Slide(props) {
  return (
    <div className={styles.slide}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
}

export default Slide;
