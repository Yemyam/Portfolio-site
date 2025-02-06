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
        <h2 className="my-20 text-center text-4xl text-black">Tech</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4 gradient">
                <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 gradient">
                <RiNextjsLine className="text-7xl text-black"></RiNextjsLine>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 gradient">
                <SiMongodb className="text-7xl text-green-500"></SiMongodb>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 gradient">
                <RiTailwindCssLine className="text-7xl text-cyan-400"></RiTailwindCssLine>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 gradient">
                <FaNodeJs className="text-7xl text-green-500"></FaNodeJs>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 gradient">
                <FaPython className="text-7xl text-yellow-300"></FaPython>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 gradient">
                <FaJava className="text-7xl text-orange-400"></FaJava>
            </div>

        </div>
    </div>
  )
}

export default Technologies