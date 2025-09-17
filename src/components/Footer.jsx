import React from "react";
import Logo from "./Logo";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        <div className={styles.info}>
          <p>© {currentYear} RareSpawn. Todos os direitos reservados.</p>
          <p className={styles.credits}>
            Criado por <strong>Enzo Rocha dos Santos</strong> | Site apenas para
            fins educativos.
          </p>
        </div>
      </div>
    </footer>
  );
}
