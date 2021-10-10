import React, { useState } from "react"
import "./Navbar.scss"
import LinkContainer from "./Linkcontainer/LinkContainer"
import SideBarMenu from "./SideBarMenu/SideBarMenu"

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false)

  const closeModalHandler = () => {
    setOpenModal(false)
  }

  const openModalHandler = () => {
    setOpenModal(true)
  }
  return (
    <>
      <nav className="navbar">
        <h1 className="navbar__logo">David Ramiro</h1>
        {!openModal && <LinkContainer />}
        <SideBarMenu
          closeModalHandler={closeModalHandler}
          openModalHandler={openModalHandler}
          openModal={openModal}
        />
      </nav>
    </>
  )
}

export default Navbar
