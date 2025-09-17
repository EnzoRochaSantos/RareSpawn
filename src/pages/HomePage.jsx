import React from "react";
import ProductGrid from "../components/ProductGrid";
import { products as allProducts } from "../data/products";
import styles from "../styles/HomePage.module.css";

export default function HomePage({ onAddToCart }) {
  const ps3Products = allProducts.filter((p) => p.category.includes("PS3"));
  const ps4Products = allProducts.filter((p) => p.category.includes("PS4"));
  const ps5Products = allProducts.filter((p) => p.category.includes("PS5"));

  return (
    <div>
      <main className={styles.mainContainer}>
        <h2 className={styles.sectionTitle}>PS3 Special Edition</h2>
        <ProductGrid products={ps3Products} onAddToCart={onAddToCart} />

        <h2 className={styles.sectionTitle}>PS4 Special Edition</h2>
        <ProductGrid products={ps4Products} onAddToCart={onAddToCart} />

        {ps5Products.length > 0 && (
          <>
            <h2 className={styles.sectionTitle}>PS5 Special Edition</h2>
            <ProductGrid products={ps5Products} onAddToCart={onAddToCart} />
          </>
        )}
      </main>
    </div>
  );
}
