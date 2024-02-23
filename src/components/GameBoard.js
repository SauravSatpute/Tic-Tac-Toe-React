import React from 'react'
import style from './GameBoard.module.css'
const GameBoard = () => {
  return (
    <div className={`${style.flexCenter} ${style.gameContainer}`}>
        <div className={style.gridContainer}>
            <div className = {style.gridItem}><button className={style.btnStyle}>X</button></div>
            <div className = {style.gridItem}><button className={style.btnStyle}>O</button></div>
            <div className = {style.gridItem}><button className={style.btnStyle}>1</button></div>
            <div className = {style.gridItem}><button className={style.btnStyle}>1</button></div>
            <div className = {style.gridItem}><button className={style.btnStyle}>1</button></div>
            <div className = {style.gridItem}><button className={style.btnStyle}>1</button></div>
            <div className = {style.gridItem}><button className={style.btnStyle}>1</button></div>
            <div className = {style.gridItem}><button className={style.btnStyle}>1</button></div>
            <div className = {style.gridItem}><button className={style.btnStyle}>1</button></div>
        </div>        
    </div>
  )
}

export default GameBoard