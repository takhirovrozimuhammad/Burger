import React from "react";
import styles from "./Backdrop.module.css";

export default function Backdrop({ show, clicked }) {
  return show ? <div className={styles.Backdrop} onClick={clicked} /> : null;
}
