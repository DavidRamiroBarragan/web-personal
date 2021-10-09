import React from "react"
import Modal from "../UI/Modal/Modal"
import "./Sidebar.scss"
import { AiOutlineCloseCircle } from "react-icons/all"
import { motion } from "framer-motion"

const Sidebar = ({ openModal, setOpenModal }) => {
  return (
    <Modal openModal={openModal} setOpenModal={setOpenModal}>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", bounce: 0, duration: 0.5 }}
        exit={{ x: "100%" }}
        className="modal-sidebar"
      >
        <div className="modal-container__header">
          <button className="modal-container__button">
            <AiOutlineCloseCircle
              size="1.65rem"
              onClick={() => setOpenModal((current) => !current)}
            />
          </button>
        </div>
        <div className="modal-sidebar__link-container">
          <a href="#" className="modal-sidebar__link-container__link">
            Portfolio
          </a>
          <a href="#" className="modal-sidebar__link-container__link">
            Sobre davidramiro.com
          </a>
          <a href="#" className="modal-sidebar__link-container__link">
            Sobre mi
          </a>
        </div>
      </motion.div>
    </Modal>
  )
}

export default Sidebar
