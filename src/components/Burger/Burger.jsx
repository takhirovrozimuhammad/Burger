import React from "react";
import styles from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

export default function Burger({ ingredients }) {
  let transformed = Object.keys(ingredients)
    .map((igKey) =>
      [...Array(ingredients[igKey])].map((_, i) => (
        <BurgerIngredient key={igKey + i} type={igKey} />
      ))
    )
    .reduce((arr, el) => arr.concat(el), []);

  return (
    <div className={styles.Card}>
      <div className={styles.Burger}>
        <BurgerIngredient type="bread-top" />
        {transformed.length === 0 ? (
          <p className={styles.Empty}>Iltimos Burgeringizni qurish uchun tanlang</p>
        ) : (
          transformed
        )}
        <BurgerIngredient type="bread-bottom" />
      </div>
    </div>
  );
}
