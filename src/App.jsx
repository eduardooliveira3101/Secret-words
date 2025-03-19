//React 
// eslint-disable-next-line no-unused-vars
import { useState, useEffect, useCallback } from 'react'

//Import do CSS 
import styles from './App.module.css'
import React from 'react'

//Imports dos components / dados do jogo
import { wordsList } from './data/Words'
import { StartScreen } from './components/StartScreen'
import { Game } from './components/Game'
import { GameOver } from './components/GameOver'

//Array para progressão do jogo
const stages = [
  { id: 1, name: 'start' },
  { id: 1, name: 'game' },
  { id: 1, name: 'end' }
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  // eslint-disable-next-line no-unused-vars
  const [pickedWord, setPickedWord] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [pickedCategory, setpickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(10)
  const [score, setScore] = useState(0)


  function pickWordAndPickedCategory() {
    //Escolhendo a categoria aleatória 
    //Aqui estou acessando a propriedade do objeto
    const categories = Object.keys(words)
    //Aqui estou pegando a chave do objeto, arredondando para baixo o calculo que está sendo um numero aleatório x o tamanho das categorias que se encontram no objeto
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    //Aqui estou pegando uma palavra aleatória de dentro do array
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return { category, word }
  }

  function startGame() {
    const { word, category } = pickWordAndPickedCategory()
    let wordLetters = word.split("")
    wordLetters = wordLetters.map((i) => i.toLowerCase())

    setPickedWord(word)
    setpickedCategory(category)
    setLetters(wordLetters)

    console.log(wordLetters, category)
    setGameStage(stages[1].name)
  }

  function verifyLetter(letter) {
    const normalizeLetter = letter.toLowerCase()
    if (guessedLetters.includes(normalizeLetter) || wrongLetters.includes(normalizeLetter)) {
      return;
    }

    if (letters.includes(normalizeLetter)) {
      setGuessedLetters((currentStateGuessedLetters) => [
        ...currentStateGuessedLetters,
        normalizeLetter
      ])
    } else {
      setWrongLetters((currentStateWrongLetters) => [
        ...currentStateWrongLetters,
        normalizeLetter,
      ])
    }

    console.log(guessedLetters)
    console.log(wrongLetters)
  }

  function retry() {
    setGameStage(stages[0].name)
  }

  return (
    <div className={styles.App}>
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters} guessedLetters={guessedLetters} wrongLetters={wrongLetters} guesses={guesses} score={score} />}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  )
}

export default App
