import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import styles from "../styles/Header.module.css";

export default function Header({ cartItemCount }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Products">Produtos</Link>
            </li>
            <li>
              <Link to="/About">Sobre</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.actions}>
          <ThemeToggle />
          <Link to="/mylist" className={styles.cartLink}>
            🛒
            {cartItemCount > 0 && (
              <span className={styles.cartBadge}>{cartItemCount}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
