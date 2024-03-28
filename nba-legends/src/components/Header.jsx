import React from 'react'
import "./Header.css"
import logo from "../asset/nba-logo.png";

const Header = () => {
  return (
    <div>
      <img src={logo} alt="" />
      <h1>NBA Legends</h1>
    </div>
  )
}

export default Header