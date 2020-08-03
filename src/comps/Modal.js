import React from 'react'
import { motion } from 'framer-motion'

const Modal = ({ selectedImg, setSelectedImg }) => {

   const handeClick = (event) => {
      if (event.target.classList.contains("backdrop")) {
         setSelectedImg(null)
      }
   }

   return (
      <motion.div className="backdrop"
         onClick={handeClick}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
      >
         <motion.img src={selectedImg} alt="pict" initial={{ y: "-100vh" }} animate={{ y: 0 }} />
      </motion.div>
   )
}

export default Modal