import styles from './Game.module.css'
import '../index.css'
import { useState, useRef } from 'react'

export function Game({ verifyLetter, pickedWord, pickedCategory, letters, guessedLetters, wrongLetters, guesses, score }) {

  const [letter, setLetter] = useState('')
  const letterInputRef = useRef(null)

  function handleSubmit(event) {
    event.preventDefault()
    verifyLetter(letter)

    setLetter('')
    letterInputRef.current.focus()
  }

  return (
    <div className={styles.game}>
      <p className={styles.points} >
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra: </h1>
      <h3 className={styles.tip}>
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s)</p>
      <div className={styles.wordContainer}>
        {letters.map((letter, i) => (
          guessedLetters.includes(letter) ? (
            <span key={i} className={styles.letter}>
              {letter}
            </span>) : (
            <span key={i} className={styles.blankSquare}>
            </span>
          )
        ))}
      </div>

      <div className={styles.letterContainer}>
        <p>Tente adivinhar uma letra da palavra: </p>
        <form onSubmit={handleSubmit}>
          <input ref={letterInputRef} value={letter} onChange={(event) => setLetter(event.target.value)} type="text" name='letter' maxLength={1} required />
          <button>Jogar</button>
        </form>
      </div>

      <div className={styles.wrongLettersContainer}>
        <p>Letras já utilizadas: </p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div>
  )
}