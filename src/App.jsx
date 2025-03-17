//React 
import {useState, useEffect, useCallback} from 'react'

//Imports dos components / dados do jogo
import {wordsList} from './data/Words'
import {StartScreen} from './components/StartScreen'

//Import do CSS 
import styles from './App.module.css'
import React from 'react'

function App() {
  return (
    <div className={styles.App}>
      <StartScreen/>
    </div>
  )
}

export default App
