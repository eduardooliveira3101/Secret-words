import React from 'react'

import '../index.css'
// eslint-disable-next-line no-unused-vars
import styles from './Game.module.css'

export function Game({verifyLetter}) {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={verifyLetter}>Adivinhar letra</button>
    </div>
  )
}