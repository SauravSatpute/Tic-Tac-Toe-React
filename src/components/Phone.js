import React, { createContext, useState } from 'react'
import style from './Phone.module.css'
import ChoosePlayer from './ChoosePlayer'
import GameBoard from './GameBoard';


const Phone = () => {
  let [gameBoard,setgameBoard] = useState(false);

  let [btnXClick, setBtnXClick] = useState(false); 

  let [btnYClick, setBtnYClick] = useState(false);

  let [player, setPlayer] = useState('');
  // let [cpu, setCpu] = useState('');

  // let [btnXO, setBtnXO] = useState([{x : false, y : false}])



  const toggleSelectX = () => {
      setPlayer('X')
      setBtnYClick(false);
      setBtnXClick(true);
      // console.log("CPU :" + cpu + " Player :"+player)
  }

  const toggleSelectY = () =>{
      setPlayer('O')
      setBtnXClick(false);
      setBtnYClick(true);
  }

  const toggle = () => {

      if(gameBoard === true) {
        setgameBoard(false);
      }
      else {
        setgameBoard(true);
      }
  
  }

  // const togglePlayer = () => {
  //     if(btnXClick){
  //       setPlayer('X')
        
  //     }
  //     else{
  //       setPlayer('O')
  //       setCpu('X')
  //     }
  // }

  // const toggleCPU = () => {
  //   if(btnXClick){
  //       setCpu("O")
  //   }
  //   else{
  //       setCpu('X')
  //   }
  // }
  

  

  return (
    <div className={style.phone}>
       
      {gameBoard ? <GameBoard btnXClick={btnXClick} btnYClick={btnYClick} playerText = {player} toggle={toggle}/>
      :<ChoosePlayer gameBoard = {gameBoard} toggleScreen = {toggle} btnXClick={btnXClick} btnYClick={btnYClick} toggleSelectX={toggleSelectX} toggleSelectY={toggleSelectY}/> 
      }
        
    </div>
  )
}

export default Phone