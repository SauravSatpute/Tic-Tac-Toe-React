import React, { useContext } from 'react'
import style from './ChoosePlayer.module.css'


const ChoosePlayer = ({gameBoard, toggleScreen}) => {

    const switchToGameBoard = () => {
        toggleScreen();
    }



  return (
    <div className={style.flexColumn} style={{paddingTop:'150px'}}>
        <div className={style.playerHeading}>
                <span style={{color:'#31C4BE', fontWeight:800}}>X</span>
                <span style={{color:'#F2B237', fontWeight:800}}>O</span>
        </div>
        <div style={{backgroundColor:'#1F3540', color:'#fff', textAlign:'center', padding:'1.5rem'}}>
            Pick Player
            <div className={style.flexRow} style={{ backgroundColor:'#192A32', padding:'5px', margin:'5px'}}>
                <div className={style.OptBtn} style={{color:'#D9D9D9', backgroundColor:'#192A32'}}>
                    X
                </div>
                <div className={style.OptBtn} style={{color:'#192A32', backgroundColor:'#D9D9D9'}}>
                    O
                </div>
            </div>
        </div>
        <div className={style.flexRow}>
            <button className={style.newGameBtn} style={{padding:'0.7rem 0.3rem', width:'300px', marginTop:'30px' }} onClick={switchToGameBoard}>NEW GAME ( VS CPU )</button>
        </div>
        <div className={style.flexRow}>
            <button className={style.newGameUser} style={{padding:'0.7rem 0.3rem', width:'300px', marginTop:'30px' }}>NEW GAME ( VS HUMAN ) Coming soon</button>
        </div>
        <div className={style.flexRow}>
            <button className={style.Invite} style={{padding:'0.3rem 0.3rem', width:'200px', marginTop:'50px' }}>Invite your friend</button>
        </div>
    </div>
  )
}

export default ChoosePlayer