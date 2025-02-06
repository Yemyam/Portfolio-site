import { motion } from "motion/react"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl text-black">
            About
            <span className="text-black"> Me</span>
        </h2>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity:1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 0.5}}
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl" src="https://miro.medium.com/v2/resize:fit:1024/0*wATbQ49jziZTyhZH.jpg" alt="" />
                </div>
            </motion.div>
            <motion.div 
            whileInView={{opacity: 1, x:0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 0.5}}
            className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="text-black my-2 max-w-xl py-6">I am a second year student at the University of Calgary studying computer science. I was born and raised in Calgary and I am looking for 2025 internship oppurtunities. I have a strong interest in full stack developement, and I am currently a volunteer full stack developer for the non-profit organisation Code the Change. In my free time I like to explore nature, workout, boulder, code, and play video games. In 2025 I hope to continue expanding my skillsets in full stack development, meet new people, and get back into reading. Thanks for reading this far and checking out my website!</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About