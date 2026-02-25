import React from "react";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.Page}>
      <header className={styles.Header}>
        <div className={styles.Brand}>
          <div className={styles.Logo}>🍔</div>
          <div>
            <div className={styles.Title}>Burger Quruvchisi</div>
            <div className={styles.Sub}>Burgerni qur va sotib ol</div>
          </div>
        </div>
        <div className={styles.Chip}>Ajoyib berger shop</div>
      </header>

      <main className={styles.Main}>{children}</main>

      <footer className={styles.Footer}>
         
      </footer>
    </div>
  );
}
