import React from "react";
import styles from "../styles/SkeletonCard.module.css";

export default function SkeletonCard() {
  return (
    <div className={styles.card}>
      <div className={styles.imagePlaceholder}></div>
      <div className={styles.content}>
        <div className={styles.textPlaceholder} style={{ width: "75%" }}></div>
        <div
          className={styles.textPlaceholder}
          style={{ width: "50%", marginTop: "0.5rem" }}
        ></div>
        <div className={styles.buttonPlaceholder}></div>
      </div>
    </div>
  );
}
