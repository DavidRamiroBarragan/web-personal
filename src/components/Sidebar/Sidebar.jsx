import React from "react"
import Modal from "../UI/Modal/Modal"
import "./Sidebar.scss"
import { AiOutlineCloseCircle } from "react-icons/all"

const Sidebar = ({ openModal, setOpenModal }) => {
  return (
    <Modal openModal={openModal} setOpenModal={setOpenModal}>
      <div className="modal-sidebar">
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
      </div>
    </Modal>
  )
}

export default Sidebar
