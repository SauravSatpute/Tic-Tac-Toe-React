import React, { useEffect, useState } from 'react'
import style from './GameBoard.module.css'
import PlayAgain from './PlayAgain';
const GameBoard = ({ btnXClick, btnYClick, playerText, 
  toggle }) => {
  let totalTurn = 9;
  let boxes = 9;
  let player = ''
  let cpu = ''

  if (btnXClick) {
    player = 'X'
    cpu = 'O'
  }
  else {
    cpu = 'X'
    player = 'O'
  }

  const [groupValues, setGroupValues] = useState([{ textValue: "", index: "", disabled:false }, { textValue: "", index: "",disabled:false }, { textValue: "", index: "",disabled:false }, { textValue: "", index: "",disabled:false }, { textValue: "", index: "",disabled:false }, { textValue: "", index: "",disabled:false }, { textValue: "", index: "",disabled:false }, { textValue: "", index: "",disabled:false }, { textValue: "", index: "",disabled:false }]);

  const [changePlayer, setChangePlayer] = useState(player)
  
  const [isDisabled, setIsDisabled] = useState(false);
  const [userScore, setUserScore] = useState(0)
  const [CpuScore, setCpuScore] = useState(0)
  const [tiesScore, setTiesScore] = useState(0)
  const [temp,setTemp] = useState(false)
  const [option,setOption] = useState(true);
  const [win, setWin] = useState("");

  const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6]
  ]

  const resetAllvalues = () => {
    for (let i = 0; i < 9; i++) {
      setGroupValues((prevValues) => {
        const updatedValues = [...prevValues];
        updatedValues[i] = {
          ...updatedValues[i],
          textValue: "",
          index: i,
          disabled:false
        };
        return updatedValues;
      });
    }

    setUserScore(0);
    setCpuScore(0);
    setTiesScore(0);
  }


  const reseatValues = () => {
    console.log("inside reset Values")
    for (let i = 0; i < 9; i++) {
      setGroupValues((prevValues) => {
        const updatedValues = [...prevValues];
        updatedValues[i] = {
          ...updatedValues[i],
          textValue: "",
          index: i,
          disabled:false
        };
        return updatedValues;
      });
    }
  }

useEffect(()=> {
  if(changePlayer === cpu) {
    let ans = []
    for (let i = 0; i < 9; i++) {
      if (groupValues[i].textValue === "")
        ans.push(i);
    }
    let val = ans[Math.floor(Math.random() * ans.length)];
      
    if(playerText === 'O') {
      setGroupValues((prevValues) => {
        const updatedValues = [...prevValues];
        updatedValues[val] = {
          ...updatedValues[val],
          textValue: "X",
          index: val,
          disabled:true
        };
        return updatedValues;
      });
      setTemp(!temp)
    }
    else if(playerText === 'X'){
      setGroupValues((prevValues) => {
        const updatedValues = [...prevValues];
        updatedValues[val] = {
          ...updatedValues[val],
          textValue: "O",
          index: val,
          disabled:true
        };
        return updatedValues;
      });
      setTemp(!temp)

  }
  }
  setChangePlayer(player);
},[changePlayer])





useEffect(() => {
  console.log("reset Values")
  
  if (win.charAt(0) === 'X') {
    if (playerText === win.charAt(0)) {
      setUserScore(userScore + 1)
      console.log("userscore" + " " + win)
    }
    else {
      setCpuScore(CpuScore + 1);
    }
  } else if (win.charAt(0) === 'O') {
    if (playerText === win.charAt(0)) {
      setUserScore((userScore + 1))
    }
    else {
      setCpuScore(CpuScore + 1);
    }
  }
  console.log("reset Values")

  reseatValues()

}, [win])

useEffect(() => {
  let whoWin = ""
  let XOwin = false;
  let i = 0;
  let count = 0;
  for (i = 0; i < winPattern.length; i++) {
    XOwin = false
    count++;
    if (groupValues[winPattern[i][0]].textValue !== '' && (winPattern[i][1].textValue !== '' && winPattern[i][2].textValue !== '')) {
      if (groupValues[winPattern[i][0]].textValue === groupValues[winPattern[i][1]].textValue && groupValues[winPattern[i][1]].textValue === groupValues[winPattern[i][2]].textValue) {
        console.log("Win :" + groupValues[winPattern[i][0]].textValue);
        XOwin = true;
        whoWin = groupValues[winPattern[i][0]].textValue
        console.log(whoWin)
        let rNo = Math.floor(Math.random() * 100) + 1;
        whoWin += " ";
        whoWin += rNo;
        console.log(whoWin)
        setWin(whoWin)
        break;
      }
    }
     
  }

  let isDraw = true;
  for(let i=0;i<groupValues.length;i++) {
    if(groupValues[i].textValue === ""){
      isDraw = false
      break;
    }
  }
  if(isDraw && !XOwin){
    setTiesScore(tiesScore+1);
    reseatValues();
  }

}, [temp])




const setTextValue = (event, index) => {

  setGroupValues((prevValues) => {
    const updatedValues = [...prevValues];
    updatedValues[index] = {
      ...updatedValues[index],
      textValue: playerText,
      index: index,
      disabled:true
    };
    return updatedValues;
  });

    setChangePlayer(cpu);

}

const toggleOptions = () => {
  setOption(!option);
  console.log(option)
}



return (
  <div className={`${style.flexCenter} ${style.gameContainer}`}>
    <div className={`${style.flex} ${style.widthL}`}>
      <div className={style.playerHeading}>
        <span style={{ color: '#31C4BE', fontWeight: 800 }}>X</span>
        <span style={{ color: '#F2B237', fontWeight: 800 }}>O</span>
      </div>
      <div className={`${style.gray} ${style.turn}`}>
        {changePlayer} turn
      </div>
      <div className={`${style.grayLight} ${style.restart}`} onClick={toggleOptions}>
        ↺
      </div>
    </div>
    <div className={style.gridContainer}>

      { option?
        groupValues.map((data, id) => (
          <div key={id} className={style.gridItem}><button style={{ disabled: {} }} id={id} className={`${style.btnStyle}  ${(data.textValue === 'X' ? style.skyBlue : style.yellow)}`} onClick={(event) => { setTextValue(event, id) }} disabled={data.disabled}>{data.textValue}</button></div>

        ))
        :< PlayAgain toggleOptions={toggleOptions} resetValues={resetAllvalues} toggle={toggle}/>
      }

    </div>
    <div className={`${style.scoreContainer} ${style.flex}`}>
      <div className={`${style.UserScore}`}>
        {playerText === 'X' ? 'X' : 'O'}(YOU) <br /> {userScore}
      </div>
      <div className={`${style.Ties}`}>
        TIES <br /> {tiesScore}
      </div>
      <div className={`${style.CpuScore} `}>
        {playerText === 'X' ? 'O' : 'X'}(CPU) <br /> {CpuScore}
      </div>
    </div>
  </div>
)

        }

export default GameBoard