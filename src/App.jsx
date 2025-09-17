// src/App.jsx

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyListPage from "./pages/MyListPage";
import ProductsPage from "./pages/ProductsPage"; // 1. Importe a nova página
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./styles/App.module.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (productToAdd) => {
    // Usamos o spread operator (...) para criar um novo array
    // com todos os itens antigos mais o novo item no final.
    setCartItems((prevItems) => [...prevItems, productToAdd]);
  };

  // APROVEITEI PARA PREENCHER A LÓGICA DE REMOVER TAMBÉM
  const handleRemoveFromCart = (productIdToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productIdToRemove)
    );
  };
  return (
    <div className={styles.appContainer}>
      <Header cartItemCount={cartItems.length} />

      <main className={styles.mainContent}>
        <Routes>
          <Route
            path="/"
            element={<HomePage onAddToCart={handleAddToCart} />}
          />
          {/* 2. ADICIONE A NOVA ROTA PARA A PÁGINA DE PRODUTOS */}
          <Route
            path="/products"
            element={<ProductsPage onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/mylist"
            element={
              <MyListPage items={cartItems} onRemove={handleRemoveFromCart} />
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
