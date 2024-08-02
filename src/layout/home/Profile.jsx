import React from "react";
import styles from "../../style/home/profile.module.css";

function Profile(props) {
  return (
    <div className={styles.container}>
      <div className={styles.myPhoto}>
        <img src="images/01.png" alt="image" />
      </div>
      <div className={styles.contentContainer1}>
        <h3 style={{ fontSize: "22px" }}>{props.f1}</h3>
        <h1>{props.name}</h1>
        <h2>{props.std}</h2>
        <p style={{ fontSize: "18px" }}>{props.from}</p>
        <button>Hire Me</button>
      </div>
    </div>
  );
}

export default Profile;
