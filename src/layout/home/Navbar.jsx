import React from "react";
import styles from "../../style/home/navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h2>ToyZone</h2>
      </div>

      <div className={styles.navbar}>
        <ul>
          <li>
            <Link to="/">
              <b>Home</b>
            </Link>
          </li>
          <li>
            <Link to="/About">
              <b>About</b>
            </Link>
          </li>
          <li>
            <Link to="/Reviews">
              <b>Reviews</b>
            </Link>
          </li>
          <li>
            <Link to="/products">
              <b>Products</b>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <b>Contact</b>
            </Link>
          </li>
        </ul>
      </div>
      {/* Icons In Navbar */}
      <div className={styles.list}>
        <i
          class="fa-solid fa-bars"
          style={{ color: "#f08080", cursor: "pointer" }}
        ></i>
      </div>

      <div className={styles.icons}>
        <i
          class="fa-brands fa-facebook-f fa-lg"
          style={{ color: "blue", cursor: "pointer" }}
        ></i>
        <i
          class="fa-brands fa-x-twitter fa-lg"
          style={{ color: "blue", cursor: "pointer" }}
        ></i>
        <i
          class="fa-brands fa-instagram fa-lg"
          style={{ color: "#e91e63", cursor: "pointer" }}
        ></i>
      </div>
    </div>
  );
}

export default Navbar;
