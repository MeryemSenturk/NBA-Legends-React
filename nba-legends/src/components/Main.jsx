import React from 'react'
import "../components/Main.css"
import {data} from "../asset/data.js"
import Card from "./Card.jsx"
import { useState, useEffect } from "react";



const Main = () => {
   // console.log(data);
    const [input, setInput] =useState("")
    const [datam, setDatam] = useState(data);

    const handleChange = (e)=>{
     setInput(e.target.value.trim());
    }

    useEffect(()=>{
         setDatam(
           data.filter((item) => {
             return item.name.toLowerCase().includes(input.toLowerCase());
           })
         );
         console.log(datam);
    }, [input])
  return (
    <div>
      <form action="">
        <input type="text" onChange={handleChange} placeholder='Search a legend...'/>
      </form>

      <div className="cards">
        {datam.map((item) => (
          <Card key={item.name} item={item} />
        ))}
      </div>

    </div>
  );
}

export default Main