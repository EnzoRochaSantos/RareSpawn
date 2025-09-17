import React from "react";
import ProductCard from "./ProductCard";
import styles from "../styles/ProductGrid.module.css";

export default function ProductGrid({ products, onAddToCart }) {
  return (
    <div className={styles.grid}>
      {products.map((productItem) => (
        <ProductCard
          key={productItem.id}
          product={productItem}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}
