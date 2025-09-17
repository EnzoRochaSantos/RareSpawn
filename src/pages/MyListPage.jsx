import React from "react";
import styles from "../styles/MyListPage.module.css";

export default function MyListPage({ items, onRemove }) {
  const totalValue = items.reduce((sum, currentItem) => {
    return sum + currentItem.price;
  }, 0);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Meu Carrinho</h1>
      {items.length === 0 ? (
        <p className={styles.emptyMessage}>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className={styles.itemList}>
            {items.map((item, index) => (
              <li key={`${item.id}-${index}`} className={styles.item}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className={styles.itemImage}
                />
                <div className={styles.itemDetails}>
                  <h2 className={styles.itemTitle}>{item.title}</h2>
                  <p className={styles.itemPrice}>R$ {item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className={styles.removeButton}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.totalContainer}>
            <span className={styles.totalText}>Valor Total:</span>
            <span className={styles.totalValue}>
              R$ {totalValue.toFixed(2).replace(".", ",")}
            </span>
          </div>
        </>
      )}
    </main>
  );
}
