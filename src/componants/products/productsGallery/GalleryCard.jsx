import React from "react";
import styles from "../../../style/products/productsGallery.module.css";

function GalleryCard(props) {
  return (
    <div className={styles.FirstContainer}>
      <div className={styles.MainContainer}>
        <div className={styles.galleryCardContainer}>
          <div className={styles.ImgWrap}>
            <img src={props.src} alt="" className={styles.galleryCardImg} />
          </div>
          <div className={styles.galleryCardDescContainer}>
            <h3>{props.title}</h3>
            <p>{props.Discount}</p>
            <p className={styles.inherite}>{props.Real}</p>
          </div>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
