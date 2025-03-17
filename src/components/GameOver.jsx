import React from 'react'

import '../index.css'
// eslint-disable-next-line no-unused-vars
import styles from './GameOver.module.css'

export function GameOver({retry}) {
  return (
    <div>
      <h1>End Game</h1>
      <button onClick={retry}>Voltar</button>
    </div>
  )
}
