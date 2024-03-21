import React from "react"
import "./Navbar.css"

function Navbar(props){
    console.log(props.message)
    return(
        <h1>{props.message}</h1>  
        
    )
}

export default Navbar