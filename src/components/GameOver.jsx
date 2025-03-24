import React from "react";

import "../index.css";
// eslint-disable-next-line no-unused-vars
import styles from "./GameOver.module.css";

export function GameOver({ retry, score }) {
  return (
    <div>
      <h1>Fim de jogo</h1>
      <h2>
        A sua pontuação foi: <span>{score}</span>
      </h2>
      <button onClick={retry}>Voltar</button>
    </div>
  );
}
