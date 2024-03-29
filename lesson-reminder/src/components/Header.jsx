import React from 'react'
import logo from "../asset/mylogo.png"
import "./Header.css"

const Header = () => {
  return (
    <header>
        <img src={logo} alt="" width={100}/>
        <h1>Lesson Reminder</h1>
    </header>
  )
}

export default Header