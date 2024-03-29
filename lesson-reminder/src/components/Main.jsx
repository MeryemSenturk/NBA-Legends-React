import React from 'react'
import "./Main.css"

const Main = (props) => {
    console.log(props);
    const {data} = props
    console.log(data);

    const {name, hour, image} = data

    const handleButton = () => {
       
           alert("tıklandı")
    }
       
  return (
    <main>
      <h1>6 lessons today</h1>
      <div className="cards">
        {data.map((i) => (
          <div className="card-item">
            <img src={i.image} alt="" />
            <div>
              <p>Lesson Name : {i.name} </p>
              <p>Lesson Hour : {i.hour} </p>
            </div>
          </div>
        ))}
      </div>

      <div className='btn'>
        <button onClick={handleButton}>Clear</button>
      </div>
    </main>
  );
}

export default Main;