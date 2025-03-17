//React 
// eslint-disable-next-line no-unused-vars
import {useState, useEffect, useCallback} from 'react'

//Import do CSS 
import styles from './App.module.css'
import React from 'react'

//Imports dos components / dados do jogo
import {wordsList} from './data/Words'
import {StartScreen} from './components/StartScreen'
import { Game } from './components/Game'
import { GameOver } from './components/GameOver'

//Array para progressão do jogo
const stages = [
  {id: 1, name: 'start'},
  {id: 1, name: 'game'},
  {id: 1, name: 'end'}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  // eslint-disable-next-line no-unused-vars
  const [words] = useState(wordsList)

  function startGame() {
    setGameStage(stages[1].name)
  }

  function verifyLetter() {
    setGameStage(stages[2].name)
  }

  function retry() {
    setGameStage(stages[0].name)
  }

  return (
    <div className={styles.App}>
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  )
}

export default App
