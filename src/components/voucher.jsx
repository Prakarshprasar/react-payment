import React from 'react'
import style from "./voucher.module.css"

const Voucher = ({clogo,date,btntext,txt1,dextop,color}) => {
  return (
    <div className={style.main} style={{backgroundColor:color}}>
        <div className={style.x}>
            <p>{date}</p>
            <button>{btntext}</button>
            <h1>{txt1}</h1>
            
            <p>{dextop}</p>
        </div>
        <div className={style.logo}>
            <img src={clogo} alt="" />
            <img src="https://cdn-icons-png.flaticon.com/512/626/626052.png" alt="" />
        </div>
    </div>

  )
}



export default Voucher