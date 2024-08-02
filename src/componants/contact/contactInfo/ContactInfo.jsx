import {
  faEnvelope,
  faMapLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../../style/contact/contactInfo.module.css";

function ContactInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.TitlleContainer}>
        <h2>ToyZone</h2>
        <hr />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={faMapLocationDot} style={{ fontSize: "23px" }} />
        </div>
        <p>Z6, Rajouri Garden, New Delhi-110027</p>

      </div>
      <div className={styles.infoContainer}>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "23px" }} />
        </div>
        <p>support@toyzone.in</p>

      </div>
      <div className={styles.infoContainer}>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={faPhone} style={{ fontSize: "23px" }} />
        </div>
        <p>1800 102 5905</p>

      </div>
      <iframe
        width="100%"
        height="200"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=yogi%20chowk%20surat+(Lope%20Multimedia%20Institute)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
      <script
        type="text/javascript"
        src="https://embedmaps.com/google-maps-authorization/script.js?id=c9fd5d38a1c72e1c770f88f8b2e47043337b49a0"
      ></script>
    </div>
  );
}

export default ContactInfo;
