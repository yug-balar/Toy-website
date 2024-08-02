import React from "react";
import styles from "../../style/common/title1.module.css";

function Title(props) {
  return (
    <div className={styles.titleComponants}>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </div>
  );
}

export default Title;
