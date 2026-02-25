import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.module.css";

export default function Modal({ show, modalClosed, children }) {
  return (
    <>
      <Backdrop show={show} clicked={modalClosed} />
      <div
        className={styles.Modal}
        style={{
          transform: show ? "translateY(0)" : "translateY(20px)",
          opacity: show ? "1" : "0",
          pointerEvents: show ? "auto" : "none",
        }}
      >
        {children}
      </div>
    </>
  );
}
