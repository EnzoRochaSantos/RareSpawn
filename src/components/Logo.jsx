import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Logo.module.css";

export default function Logo() {
  return (
    <Link to="/" className={styles.logoContainer}>
      <span className={styles.rare}>Rare</span>
      <span className={styles.spawn}>Spawn</span>
    </Link>
  );
}
