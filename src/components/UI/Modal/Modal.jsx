import React from "react"
import ReactDOM from "react-dom"
import { AnimatePresence, motion } from "framer-motion"
import "./Modal.scss"

const Modal = ({ openModal, children }) => {
  const variants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        duration: 1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        duration: 1,
      },
    },
  }
  return openModal
    ? ReactDOM.createPortal(
        <AnimatePresence>
          <motion.div
            key="modal"
            className="modal"
            variants={variants}
            initial="visible"
            exit="hidden"
          >
            {children}
          </motion.div>
        </AnimatePresence>,
        document.getElementById("modal-root")
      )
    : null
}

export default Modal
