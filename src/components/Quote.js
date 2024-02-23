import style from './Quote.module.css'
import React, { useEffect, useState } from 'react'

const Quote = () => {
    let [advice, setAdvice] = useState("");
    

    const fetchQuote = async () => {
        const data = await fetch("https://api.adviceslip.com/advice");
        const json = await data.json();
        console.log(json.slip.advice);
        setAdvice(json.slip.advice);
    }

    const waitForOneMinute = () => {
        
    }

    useEffect(()=> {
        fetchQuote();
      const interval = setInterval(() => {
        fetchQuote();
      }, 60000);
      return () => {
        clearInterval(interval); // Clear the interval on component unmount
      };
    },[]); 

    return (
        <div className={style.Quote}>
            <h3 className={style.QuoteHeading}>Quote #3</h3>
            <p className={style.QuotePara}>{advice}</p>
        </div>
    )
}

export default Quote