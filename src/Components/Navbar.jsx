import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const style = {color:"black"}

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <div className="text-3xl text-black">EB</div>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin style={style}></FaLinkedin>
            <FaGithub style={style}></FaGithub>
            <FaInstagram style={style}></FaInstagram>
            <FaSquareXTwitter style={style}></FaSquareXTwitter>
        </div>
    </nav>
  )
}

export default NavBar