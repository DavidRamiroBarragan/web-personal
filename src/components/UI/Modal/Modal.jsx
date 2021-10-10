import React from "react"
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import "./Modal.scss"

const Modal = ({ openModal, children }) => {
  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence exitBeforeEnter>
        {openModal && (
          <motion.div
            layoutId="modal"
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", bounce: 0, duration: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

export default Modal
