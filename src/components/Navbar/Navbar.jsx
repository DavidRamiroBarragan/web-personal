import React from "react"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__logo">David Ramiro</h1>
      <div className="navbar__link-container">
        <a href="#" className="navbar__link-container__link">
          Portfolio
        </a>
        <a href="#" className="navbar__link-container__link">
          Sobre davidramiro.com
        </a>
        <a href="#" className="navbar__link-container__link">
          Sobre mi
        </a>
      </div>
    </nav>
  )
}

export default Navbar
