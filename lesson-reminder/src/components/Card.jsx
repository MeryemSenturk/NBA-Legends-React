import React from 'react'
import "./Card.css"
import { useState } from "react"

const Card = (props) => {
    // console.log("burası", props);
    const {name, img, statistics} = props.item
     const [show, setShow] = useState(true);
  return (
    <div className="card" onClick={() => setShow(!show)}>
      {show ? (
        <div className='card-item'>
          <img src={img} alt="" />
          <h2>{name}</h2>
        </div>
      ) : (
        <ul className='statistics'>
          {statistics.map((item, i) => (
            <li>{item}</li>
          ))}
        </ul>
      )}
    </div>

  );
}

export default Card