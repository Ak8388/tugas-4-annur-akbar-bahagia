import React from 'react'
import { useState } from 'react'
import Button from './Button'
import "./People.css"

export default function People(props) {
    const [des,setDes] = useState("")
    function Click2(){
        setDes(props.des)
    }

  return (
    <div id='kotak'>
        <h2>{props.name}</h2>
        <img src={props.img} alt="" />
        <p>{des}</p>
        <div id='container-button'>
            <Button/>
            <button onClick={Click2}>Berikutnya</button>
        </div>
    </div>
  )
}
