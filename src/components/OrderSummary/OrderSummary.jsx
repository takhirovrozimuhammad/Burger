import React from "react";
import styles from "./OrderSummary.module.css";

export default function OrderSummary({ ingredients, labels, price, onCancel, onContinue }) {
  const items = Object.keys(ingredients)
    .filter((k) => ingredients[k] > 0)
    .map((k) => (
      <li key={k} className={styles.Item}>
        <span className={styles.Name}>{labels?.[k] || k}</span>
        <span className={styles.Qty}>x{ingredients[k]}</span>
      </li>
    ));

  return (
    <div>
      <div className={styles.Head}>
        <div className={styles.Title}>Sizning buyurtmangiz</div>
        <div className={styles.Sub}>Tasdiqlashdan oldin ingredientlarni ikki marta tekshiring</div>
      </div>

      <div className={styles.ListWrap}>
        {items.length === 0 ? <div className={styles.Empty}>No ingredients yet.</div> : <ul className={styles.List}>{items}</ul>}
      </div>

      <div className={styles.Total}>
        Umumiy: <span className={styles.TotalNum}>{price.toLocaleString()} so‘m</span>
      </div>

      <div className={styles.Actions}>
        <button className={styles.BtnGhost} onClick={onCancel} type="button">
          Bekor qilish
        </button>
        <button className={styles.BtnMain} onClick={onContinue} type="button">
          Sotib olaman
        </button>
      </div>
    </div>
  );
}
