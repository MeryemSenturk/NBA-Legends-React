import React from "react"
import "./Main.css"

function Main(props){
  console.log(props)

  const { imageSrc } = props;

    return (
      <main>
   
           <div className="img">
            {imageSrc.map((i) => (
              <img className="img-item" src={i} alt="flower" />
            ))}
          </div>



          {/* <div className="img">
            <img
              className="img-item"
              src="https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659_640.jpg"
              alt="lotus"
            />
            <h3>LOTUS</h3>
          </div>
          <div className="img">
            <img
              className="img-item"
              src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg"
              alt="papatya"
            />
            <h3>DAISY</h3>
          </div>
          <div className="img">
            <img
              className="img-item"
              src="https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_640.jpg"
              alt="gul"
            />
            <h3>ROSE</h3>
          </div> */}

         
      
        <div className="par">
          <p>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor repellat veniam alias, impedit nisi magnam!
          </p>
        </div>
      </main>
    );
}

export default Main