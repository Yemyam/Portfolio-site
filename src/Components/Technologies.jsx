import { motion } from "motion/react"
import { RiReactjsLine } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
        whileInView={{opacity: 1, y:0}}
        initial={{opacity:0, y: -100}}
        transition={{duration: 1.5}}

        className="my-20 text-center text-4xl text-black">Tech</motion.h2>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}

        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            whileHover={{
                scale: 1.2,
                transition: {duration: 0.25}
            }}
            className="rounded-2xl border-4 border-neutral-800 p-4 gradient">
                <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
            </motion.div>
            <motion.div 
            whileHover={{
                scale: 1.2,
                transition: {duration: 0.25}
            }}
            className="rounded-2xl border-4 border-neutral-800 p-4 gradient">
                <RiNextjsLine className="text-7xl text-black"></RiNextjsLine>
            </motion.div>
            <motion.div 
            whileHover={{
                scale: 1.2,
                transition: {duration: 0.25}
            }}
            className="rounded-2xl border-4 border-neutral-800 p-4 gradient">
                <SiMongodb className="text-7xl text-green-500"></SiMongodb>
            </motion.div>
            <motion.div 
            whileHover={{
                scale: 1.2,
                transition: {duration: 0.25}
            }}
            className="rounded-2xl border-4 border-neutral-800 p-4 gradient">
                <RiTailwindCssLine className="text-7xl text-cyan-400"></RiTailwindCssLine>
            </motion.div>
            <motion.div 
            whileHover={{
                scale: 1.2,
                transition: {duration: 0.25}
            }}
            className="rounded-2xl border-4 border-neutral-800 p-4 gradient">
                <FaNodeJs className="text-7xl text-green-500"></FaNodeJs>
            </motion.div>
            <motion.div 
            whileHover={{
                scale: 1.2,
                transition: {duration: 0.25}
            }}
            className="rounded-2xl border-4 border-neutral-800 p-4 gradient">
                <FaPython className="text-7xl text-yellow-300"></FaPython>
            </motion.div>
            <motion.div 
            whileHover={{
                scale: 1.2,
                transition: {duration: 0.25}
            }}
            className="rounded-2xl border-4 border-neutral-800 p-4 gradient">
                <FaJava className="text-7xl text-orange-400"></FaJava>
            </motion.div>

        </motion.div>
    </div>
  )
}

export default Technologies