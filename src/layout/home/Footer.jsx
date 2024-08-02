import React from "react";
import styles from "../../style/home/footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.input}>
          <h2>My Name is YUG...</h2>
          <div className={styles.innerInput}>
            <input type="email" placeholder="Your Email" />
            <i
              className="fa-regular fa-paper-plane"
              style={{ color: "#b23cdd" }}
            ></i>
          </div>
        </div>
        <div className={styles.fLogo}>
          <img src="/toy-images/y-logo3.png" alt="img" />
        </div>
      </div>
      <div className={styles.logo}>
        <div className={styles.innerMain}>
          <h2>Porfolio.</h2>
          <p>Make the right data-driven decisions that move your business.</p>
        </div>
        <div className={styles.f1Ul}>
          <ul>
            <li>About</li>
            <li>Jobs</li>
            <li>Docs</li>
          </ul>
        </div>
        <div className={styles.f2Ul}>
          <ul>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div className={styles.f3Ul}>
          <p style={{ color: "white" }}>Let's chat!</p>
          <p>hi@porfolio.app</p>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "8px" }}
          >
            <i
              class="fa-brands fa-square-facebook"
              style={{ color: "#555050" }}
            ></i>
            <i class="fa-brands fa-x-twitter" style={{ color: "#555050" }}></i>
            <i class="fa-brands fa-instagram" style={{ color: "#555050" }}></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
