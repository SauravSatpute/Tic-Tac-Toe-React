import React from 'react'
import style from './ChoosePlayer.module.css'
const ChoosePlayer = () => {
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
    </div>
  )
}

export default ChoosePlayer