import { motion } from "motion/react"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2 
        whileInView={{opacity:1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className="my-10 text-center text-4xl text-black">Get in Touch</motion.h2>
        <div className="text-center tracking-tighter text-black">
            <motion.p 
            whileInView={{opacity:1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1}}
            className="my-4">address</motion.p>
            <motion.p 
            whileInView={{opacity:1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 1}}
            className="my-4 ">587-894-****</motion.p>
            <a href="#" className="border-b border-black">ethan.braum@gmail.com</a>
        </div>
    </div>
  )
}

export default Contact