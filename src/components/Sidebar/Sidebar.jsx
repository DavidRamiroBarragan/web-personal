import React from "react"
import Modal from "../UI/Modal/Modal"
import "./Sidebar.scss"
import { motion } from "framer-motion"
import { AiOutlineClose } from "react-icons/all"

const Sidebar = ({ children, openModal, onClickHandler }) => {
  return (
    <Modal openModal={openModal}>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", bounce: 0, duration: 1 }}
        exit={{ x: "100%" }}
        className="sidebar"
      >
        <div className="sidebar__header">
          <button className="sidebar__header__button">
            <AiOutlineClose size="1.65rem" onClick={onClickHandler} />
          </button>
        </div>
        <div className="sidebar__container">{children}</div>
      </motion.div>
    </Modal>
  )
}

export default Sidebar
