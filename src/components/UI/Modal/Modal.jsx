import React from "react"
import ReactDOM from "react-dom"
import "./Modal.scss"

const Modal = ({ openModal, children }) => {
  return openModal
    ? ReactDOM.createPortal(
        <div className="modal">{children}</div>,
        document.getElementById("modal-root")
      )
    : null
}

export default Modal
