import React from 'react'
import style from './PlayAgain.module.css'
const PlayAgain = ({toggleOptions, resetValues, toggle}) => {
    const handlePlayAgain = () => {
        toggleOptions()
    }

    const handleQuit = () => {
        resetValues();
        toggle();
    }
  return (
    <div  className={`${style.wrapper}`}>
        <div className={`${style.colorYellow}`}>
            <h1>Do You Want to Quit</h1>
        </div>
        <div>
            <button className={`${style.playAgain} ${style.skyBlue}`} onClick={handlePlayAgain}>Play Again</button>
            <button className={`${style.bgYellow}`} onClick={handleQuit}>Quit</button>
        </div>
    </div>
  )
}

export default PlayAgain