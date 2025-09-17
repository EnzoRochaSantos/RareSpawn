import React from "react";
import ProductGrid from "../components/ProductGrid";
import { products as allProducts } from "../data/products";
import styles from "../styles/HomePage.module.css";

export default function ProductsPage({ onAddToCart }) {
  return (
    <main className={styles.mainContainer}>
      <h1 className={styles.sectionTitle}>Todos os Produtos</h1>
      <ProductGrid products={allProducts} onAddToCart={onAddToCart} />
    </main>
  );
}
