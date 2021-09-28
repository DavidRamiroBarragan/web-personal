import React, { useState } from "react"
import "./Navbar.scss"
import LinkContainer from "./Linkcontainer/LinkContainer"
import { GiHamburgerMenu } from "react-icons/all"
import Sidebar from "../Sidebar/Sidebar"

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <nav className="navbar">
        <h1 className="navbar__logo">David Ramiro</h1>
        <GiHamburgerMenu
          size="1.65rem"
          onClick={() => setOpenModal(true)}
          className="navbar__hamburger-icon"
        />
        <LinkContainer />
      </nav>
      <Sidebar openModal={openModal} setOpenModal={setOpenModal} />
    </>
  )
}

export default Navbar
