import React from 'react'
import style from './Phone.module.css'
import ChoosePlayer from './ChoosePlayer'

const phone = () => {
  return (
    <div className={style.phone}>
        <ChoosePlayer/>
    </div>
  )
}

export default phone