import React from 'react'
import { useState } from 'react'
import "./Button.css"

export default function Button() {
    const [isi,setIsi]=useState("Like");
    const [color,setColor] = useState("gray")

    function Click(){
        if(isi === "Like"){
            setIsi("Dislike")
            setColor("red")
        }else{
            setIsi("Like")
            setColor("gray")
        }
    }

  return (
    <>
        <button onClick={Click} style={{backgroundColor:color}}>{isi}</button>
    </>
  )
}
