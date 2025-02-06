import { motion } from "motion/react"

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"

                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-black">
                        Ethan Braum
                    </motion.h1>
                    <motion.span 
                    variants={container(0.25)}
                    initial="hidden"
                    animate="visible"

                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent text-4xl">
                        Full Stack Developer
                    </motion.span>
                    <motion.p 
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-6 tracking-tighter text-black">
                        I am Ethan Braum, a driven second-year Computer Science student at the University of Calgary with an interest in full stack development, and a passion for building cool things :)
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img 
                    initial={{x:100, opacity: 0}}
                    animate={{x:0, opacity:1}}
                    transition={{duration: 1, delay: 0.7}}
                    className="w-1/2 rounded-full" src="https://as2.ftcdn.net/v2/jpg/03/46/93/61/1000_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg" alt="Ethan Braum" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero