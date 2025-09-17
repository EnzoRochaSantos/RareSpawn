import React from "react";
import styles from "../styles/Button.module.css";

export default function Button({
  children,
  onClick,
  variant = "solid",
  fullWidth = false,
  disabled = false,
}) {
  const variantClass = {
    solid: styles.solid,
    outline: styles.outline,
    ghost: styles.ghost,
  };

  const buttonClasses = `
    ${styles.base}
    ${variantClass[variant]}
    ${fullWidth ? styles.fullWidth : ""}
    ${disabled ? styles.disabled : ""}
  `;

  return (
    <button onClick={onClick} disabled={disabled} className={buttonClasses}>
      {children}
    </button>
  );
}
