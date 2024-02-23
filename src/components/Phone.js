import React, { createContext, useState } from 'react'
import style from './Phone.module.css'
import ChoosePlayer from './ChoosePlayer'
import GameBoard from './GameBoard';


const Phone = () => {
  let [gameBoard,setgameBoard] = useState(false);

  const toggle = () => {

      if(gameBoard === true) {
        setgameBoard(false);
      }
      else {
        setgameBoard(true);
      }
  
  }

  

  return (
    <div className={style.phone}>
      {gameBoard ? <GameBoard/>
      :<ChoosePlayer gameBoard = {gameBoard} toggleScreen = {toggle}/> 
      }
        
    </div>
  )
}

export default Phone