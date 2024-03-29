import React from 'react'
import "./Main.css"

const Main = (props) => {
    console.log(props);
    const {data} = props
    console.log(data);

    const {name, hour, image} = data

    const handleClear = () =>{
     <p>0 lesson today</p>
        }
       
  return (
    <main>
      <div className='cards'>
        {data.map((i) => (
          <div className='card-item'>
            <img src={i.image} alt="" />
            <div>
              <p>Lesson Name : {i.name} </p>
              <p>Lesson Hour : {i.hour} </p>
            </div>
          </div>
        ))}
      </div>

      <button onClick={handleClear}>Clear</button>
    </main>
  );
}

export default Main;