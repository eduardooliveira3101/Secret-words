import React from "react";

import "../index.css";
import styles from "./StartScreen.module.css";

export function StartScreen({ startGame }) {
  return (
    <div>
      <h1>Secret Words</h1>
      <p>Clique no botão abaixo para começar</p>
      <button onClick={startGame} className={styles.button}>
        Começar jogo
      </button>
    </div>
  );
}
