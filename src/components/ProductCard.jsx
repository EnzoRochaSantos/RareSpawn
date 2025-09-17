import React from "react";
import Button from "./Button";
import styles from "../styles/ProductCard.module.css";

export default function ProductCard({ product, onAddToCart }) {
  if (!product) return null;

  const Rating = ({ rating }) => {
    return (
      <div className={styles.rating}>
        {"★"
          .repeat(rating)
          .split("")
          .map((_, index) => (
            <span key={index} className={styles.starFilled}>
              ★
            </span>
          ))}
        {"☆"
          .repeat(5 - rating)
          .split("")
          .map((_, index) => (
            <span key={index} className={styles.starEmpty}>
              ☆
            </span>
          ))}
      </div>
    );
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={product.imageUrl}
          alt={product.title}
          className={styles.image}
          loading="lazy"
        />
        {product.tag && <span className={styles.tag}>{product.tag}</span>}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.info}>
          <p className={styles.price}>R$ {product.price.toFixed(2)}</p>
          <Rating rating={product.rating} />
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.buttonWrapper}>
          <Button
            variant="solid"
            onClick={() => onAddToCart(product)}
            fullWidth
          >
            Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
}
